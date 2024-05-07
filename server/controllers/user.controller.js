import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'; // Import library jwt untuk menghasilkan token JWT
import { UserAccount } from '../models/user.account.model.js';
import {serverBadRequest, serverOk, serverResponse} from './response.controller.js';
import {newAccountValidation} from '../validation/user.account.validation.js';
import { MESSAGE, serverLog } from './server.log.controller.js';

export const createUser = async(req, res, next) => {
    const title = 'CONTROLLERS.USER.CONTROLLER.createUser';
    try {
        serverLog(MESSAGE.STARTOF_REQUEST, `${MESSAGE.STARTOF_REQUEST} [${title  }]`);
        const {name, email, password } = req.body;
        const validation = await newAccountValidation(name, email, password); 
        if (validation !== true) {
            serverLog(MESSAGE.FAILURE, validation)
            serverLog(MESSAGE.SENDING);
            serverBadRequest(res, validation)
            serverLog(MESSAGE.ENDOF_REQUEST);
            return;
        }
        const hashPassword = bcryptjs.hashSync(password, 10);
        const newUser = new UserAccount({
            name,
            email,
            password: hashPassword,
            picture: null
        })
        await newUser.save();
        const {password: pass, ...rest} = newUser._doc;
        serverLog(MESSAGE.OK, `NEW ACCOUNT CREATED: ${newUser.email}`);
        serverLog(MESSAGE.SENDING);
        serverOk(res, rest);
        serverLog(MESSAGE.OK);
        serverLog(MESSAGE.ENDOF_REQUEST);
        return;
    } catch (error) {
        next(error);
    }
}

export const loginUser = async (req, res, next) => {
    try {
        serverLog(MESSAGE.STARTOF_REQUEST, 'CONTROLLERS.USER.CONTROLLER.loginUser');
        const { email, password } = req.body; // Mendapatkan email dan password dari body request
        // Periksa apakah email dan password tersedia
        if (!email || !password) {
            serverLog(MESSAGE.FAILURE, 'Email and Password are empty.');
            serverLog(MESSAGE.SENDING);
            res.status(400).json(serverResponse(false, 400, 'Email and password are required'))
            serverLog(MESSAGE.ENDOF_REQUEST);
            return;
        }

        // Mencari pengguna berdasarkan email di database
        const validUser = await UserAccount.findOne({ email: email });
        // Jika pengguna tidak ditemukan, kirim respons dengan status 404
        if (!validUser) {
            return res.status(404).json(serverResponse(false, 404, 'User not found'));
        }
        serverLog(MESSAGE.ACCEPT, 'ACCOUNT OK!')
        // Memeriksa apakah password yang diberikan cocok dengan password yang tersimpan di database
        serverLog(MESSAGE.VALIDATING, 'VALIDATING PASSWORD...')
        const passwordIsValid = bcryptjs.compareSync(password, validUser.password);
        // Jika password tidak cocok, kirim respons dengan status 401
        if (!passwordIsValid) {
            serverLog(MESSAGE.FAILURE, 'PASSWORD NOT OK!');
            serverLog(ENDOF_REQUEST);
            return res.status(401).json(serverResponse(false, 401, 'Incorrect password'));
        }
        serverLog(MESSAGE.ACCEPT, 'PASSWORD OK!')
        // Jika login berhasil, menghasilkan token JWT
        serverLog(MESSAGE.SENDING, 'SENDING TOKEN...');
        const token = jwt.sign({ email: validUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // Kirim respons sukses dengan token JWT dan informasi pengguna yang terbatas
        serverLog(MESSAGE.ACCEPT, `TOKEN OK!`)
        serverLog(MESSAGE.ACCEPT, `${email} LOGIN ACCEPTED`)
        serverLog(MESSAGE.SENDING, 'SENDING RESPONSE...');
        const {password: pass, ...rest} = validUser._doc;
        res
            .status(200)
            .cookie('access_token', token, {httpOnly: true})
            .json(
                serverResponse(true, 200, 
                    { 
                        user: rest
                    }
            )
        );
        serverLog(MESSAGE.ACCEPT, 'RESPONSE OK!');
        serverLog(MESSAGE.ENDOF_REQUEST);
        return;
    } catch (error) {
        // Tangani kesalahan jika terjadi
        console.error('Error logging in user:', error);
        return res.status(500).json(serverResponse(false, 500, 'Internal server error'));
    }
}