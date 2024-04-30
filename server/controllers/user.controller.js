import {serverResponse} from './response.controller.js';
import {User} from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'; // Import library jwt untuk menghasilkan token JWT

export const createUser = async(req, res, next) => {
    try {
        const { email, password, picture } = req.body;
        const hashPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({
            email,
            password: hashPassword,
            picture
        })
        await newUser.save();
        res.status(201).json(
            serverResponse(true,201,'OK!')
        );
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
        const validUser = await User.findOne({ email });

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
