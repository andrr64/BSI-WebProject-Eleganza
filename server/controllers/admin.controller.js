/*
    File: auth.controller.js
    Deskripsi: Modul untuk mengelola otentikasi admin
*/

import bcryptjs from 'bcryptjs'; // Import library bcryptjs untuk melakukan hashing password
import jwt from 'jsonwebtoken'; // Import library jwt untuk menghasilkan token JWT
import { Admin } from '../models/admin.model.js'; // Import model Admin untuk berinteraksi dengan database
import { serverNotFound, serverResponse } from './response.controller.js'; // Import fungsi serverResponse untuk memformat respons JSON
import { isTokenValid } from '../security/admin.security.js'; // Import fungsi isTokenValid untuk memeriksa kevalidan token JWT

/*
    Fungsi: loginAdmin
    Deskripsi: Melakukan proses login admin
    Parameter: 
        - req: objek request dari client
        - res: objek response yang akan dikirimkan kembali ke client
        - next: fungsi middleware selanjutnya dalam rangkaian middleware Express (tidak digunakan dalam fungsi ini)
    Return: Tidak ada
*/
export const loginAdmin = async (req, res, next) => {
    const { username, password } = req.body; // Mendapatkan username dan password dari body request

    // Memeriksa apakah username dan password tersedia
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // Mencari akun admin berdasarkan username di database
    const account = await Admin.findOne({ username });

    // Jika akun tidak ditemukan, kirim respons dengan status 404
    if (!account){
        return serverNotFound(res, 'account not found.');
    }

    // Memeriksa apakah password yang diberikan cocok dengan password yang tersimpan di database
    const passwordIsValid = bcryptjs.compareSync(password, account.password);

    // Jika password tidak cocok, kirim respons dengan status 401
    if (!passwordIsValid){
        res.status(401).json(
            serverResponse(false, 401, 'wrong credentials!')
        );
    }

    // Jika login berhasil, menghasilkan token JWT
    const token = jwt.sign({ username: username }, process.env.JWT_ADMIN_SECRET, { expiresIn: '1h' });
    
    // Kirim respons sukses dengan token JWT
    res
        .status(200)
        .cookie('access_token', token, {httpOnly: true})
        .json(serverResponse(true,200));
}

/*
    Fungsi: createAdmin
    Deskripsi: Membuat admin baru dalam sistem
    Parameter: 
        - req: objek request dari client
        - res: objek response yang akan dikirimkan kembali ke client
        - next: fungsi middleware selanjutnya dalam rangkaian middleware Express (tidak digunakan dalam fungsi ini)
    Return: Tidak ada
*/
export const createAdmin = async (req, res, next) => {
    try {
        const verifyAdmin = await isTokenValid(req.cookies.access_token);
        if (!verifyAdmin.status){
            return res.status(verifyAdmin.code).json(verifyAdmin);
        }
        const { username, password } = req.body;

        // Periksa apakah username dan password tersedia
        if (!username || !password) {
            return res.status(400).json(serverResponse(false, 400, 'Username and password are required'));
        }

        // Periksa apakah admin dengan username tersebut sudah ada dalam database
        const existingAdmin = await Admin.findOne({ username });
        
        // Jika admin dengan username tersebut sudah ada, kirim respons dengan status 400
        if (existingAdmin) {
            return res.status(400).json(serverResponse(false, 400, 'Admin with this username already exists'));
        }

        // Enkripsi password sebelum menyimpannya ke database
        const hashedPassword = bcryptjs.hashSync(password, 10);

        // Buat admin baru dengan password yang telah dienkripsi
        const newAdmin = new Admin({ username, password: hashedPassword });
        await newAdmin.save();
        // Kirim respons sukses dengan status 201
        return res.status(201).json(serverResponse(true, 201));
    } catch (error) {
        // Tangani kesalahan jika terjadi
        console.error('Error creating admin:', error);

        // Kirim respons dengan status 500 jika terjadi kesalahan internal server
        return res.status(500).json(serverResponse(false, 500, 'Internal server error'));
    }
}
