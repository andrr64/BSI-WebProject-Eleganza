// Import modul yang diperlukan
import express from 'express';
import cookieParser from 'cookie-parser'; // Opsional, digunakan jika menggunakan cookies
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

// Import rute-rute API
import API_userRoute from './routes/user.route.js';
import API_productRoute from './routes/product.route.js';
import API_adminRoute from './routes/admin.route.js';
import API_webRoute from './routes/web.route.js';
import API_brandRoute from './routes/brand.route.js';
import API_chat from './routes/chat.route.js';

// Import fungsi respons dari controller
import { serverOk, serverResponse } from './controllers/response.controller.js';

// Konfigurasi variabel lingkungan
dotenv.config();

// Inisialisasi aplikasi Express
const app = express();

// Versi server
const vers = '1.0.0';

// Direktori utama proyek
const __dirname = path.resolve();

// Pengaturan middleware
app.use(express.json()); // Middleware untuk parsing body request menjadi JSON
app.use(cookieParser()); // Middleware untuk mengurai cookie HTTP

// Koneksi ke MongoDB
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log('Successfully connected to database');
    console.log('-----------------------------');
  })
  .catch((err) => {
    console.error(err);
  });

// Serve file statis dari aplikasi React
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Definisikan rute-rute API
app.use('/api/v1/user', API_userRoute);
app.use('/api/v1/product', API_productRoute);
app.use('/api/v1/admin', API_adminRoute);
app.use('/api/v1/web', API_webRoute);
app.use('/api/v1/brand', API_brandRoute);
app.use('/api/v1/chat', API_chat);

// Handler untuk rute "catchall": mengirimkan file index.html dari aplikasi React
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});
app.get('/admin', (req, res) => {
  serverOk(res);
})


// Middleware untuk penanganan error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json(serverResponse(false, statusCode, message));
});

// Mulai server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('-----------------------------');
  console.log(`Eleganza Server ${vers}`);
  console.log(`Port: ${PORT}`);
  console.log('-----------------------------');
});
