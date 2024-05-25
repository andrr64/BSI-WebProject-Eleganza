import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserAccount } from '../models/user.account.model.js';
import { serverBadRequest, serverForbidden, serverNotFound, serverOk, serverResponse, serverInternalError } from './response.controller.js';
import { newAccountValidation } from '../validation/user.account.validation.js';
import { MESSAGE, serverLog } from './server.log.controller.js';
import { serverProcess } from './server.process.controller.js';

/**
 * Membuat akun pengguna baru dalam sistem.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirimkan kembali ke client.
 * @param {Function} next - Fungsi middleware untuk menangani error.
 */
export const createUser = async (req, res, next) => {
    await serverProcess(res, async () => {
        const { name, email, password } = req.body;
        
        // Validasi data akun baru
        const validation = await newAccountValidation(name, email, password);
        if (validation !== true) return serverBadRequest(res, validation);

        // Enkripsi password sebelum menyimpannya ke database
        const hashPassword = bcryptjs.hashSync(password, 10);
        const newUser = new UserAccount({ name, email, password: hashPassword, picture: null });
        await newUser.save();

        // Mengirim respons sukses dengan data pengguna yang telah dibuat
        const { password: pass, ...rest } = newUser._doc;
        serverOk(res, rest);
    }, 'create user', next);
};

/**
 * Melakukan proses login pengguna (user).
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirimkan kembali ke client.
 * @param {Function} next - Fungsi middleware untuk menangani error.
 */
export const loginUser = async (req, res, next) => {
    await serverProcess(res, async () => {
        const { email, password } = req.body;

        // Periksa apakah email dan password tersedia
        if (!email || !password) return serverBadRequest(res, 'Email and password are required');

        // Mencari pengguna berdasarkan email di database
        const validUser = await UserAccount.findOne({ email });
        if (!validUser) return serverNotFound(res, 'User not found');

        // Memeriksa apakah password yang diberikan cocok dengan password yang tersimpan di database
        const passwordIsValid = bcryptjs.compareSync(password, validUser.password);
        if (!passwordIsValid) return res.status(401).json(serverResponse(false, 401, 'Incorrect password'));

        // Jika login berhasil, menghasilkan token JWT
        const token = jwt.sign({ email: validUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Kirim respons sukses dengan token JWT dan informasi pengguna yang terbatas
        const { password: pass, ...rest } = validUser._doc;
        res
            .status(200)
            .cookie('access_token', token, { httpOnly: true })
            .json(serverResponse(true, 200, { user: rest }));
    }, 'login user', next);
};

/**
 * Memeriksa validitas token JWT.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirimkan kembali ke client.
 * @param {Function} next - Fungsi middleware untuk menangani error.
 */
export const isTokenOk = async (req, res, next) => {
    await serverProcess(res, async () => {
        const token = req.cookies.access_token;
        if (!token) return serverBadRequest(res, 'Empty token!');

        jwt.verify(token, process.env.JWT_SECRET, (err) => {
            if (err) return serverForbidden(res, 'Invalid or expired token');
            serverOk(res, 'Token accepted');
        });
    }, 'is token ok', next);
};
