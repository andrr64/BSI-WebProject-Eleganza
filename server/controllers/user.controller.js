import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'; // Import library jwt untuk menghasilkan token JWT
import { UserAccount } from '../models/user.account.model.js';
import {serverBadRequest, serverOk, serverResponse} from './response.controller.js';
import {newAccountValidation} from '../validation/user.account.validation.js';

export const createUser = async(req, res, next) => {
    try {
        const {name, email, password, picture } = req.body;
        const validation = await newAccountValidation(name, email, password); 
        if (validation !== true) return serverBadRequest(res, validation);
        const hashPassword = bcryptjs.hashSync(password, 10);
        const newUser = new UserAccount({
            name,
            email,
            password: hashPassword,
            picture
        })
        await newUser.save();
        return serverOk(res);
    } catch (error) {
        next(error);
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body; // Mendapatkan email dan password dari body request

        // Periksa apakah email dan password tersedia
        if (!email || !password) {
            return res.status(400).json(serverResponse(false, 400, 'Email and password are required'));
        }

        // Mencari pengguna berdasarkan email di database
        const validUser = await UserAccount.findOne({ email });

        // Jika pengguna tidak ditemukan, kirim respons dengan status 404
        if (!validUser) {
            return res.status(404).json(serverResponse(false, 404, 'User not found'));
        }

        // Memeriksa apakah password yang diberikan cocok dengan password yang tersimpan di database
        const passwordIsValid = bcryptjs.compareSync(password, validUser.password);

        // Jika password tidak cocok, kirim respons dengan status 401
        if (!passwordIsValid) {
            return res.status(401).json(serverResponse(false, 401, 'Incorrect password'));
        }

        // Jika login berhasil, menghasilkan token JWT
        const token = jwt.sign({ email: validUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // Kirim respons sukses dengan token JWT dan informasi pengguna yang terbatas
        return res
            .status(200)
            .cookie('access_token', token, {httpOnly: true})
            .json(
                serverResponse(true, 200, 
                    { 
                        user: { 
                            email: validUser.email, 
                            picture: validUser.picture 
                        } 
                    }
            )
        );
    } catch (error) {
        // Tangani kesalahan jika terjadi
        console.error('Error logging in user:', error);
        return res.status(500).json(serverResponse(false, 500, 'Internal server error'));
    }
}
