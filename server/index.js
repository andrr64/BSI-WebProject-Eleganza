import express from 'express';
import cookieParser from 'cookie-parser'; // Optional, if using cookies
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import API_userRoute from './routes/user.route.js';
import API_productRoute from './routes/product.route.js';
import API_adminRoute from './routes/admin.route.js';
import API_webRoute from './routes/web.route.js';
import API_brandRoute from './routes/brand.route.js';
import API_chat from './routes/chat.route.js';
import path from 'path';
import { serverOk, serverResponse } from './controllers/response.controller.js';

const app = express();
const vers = '1.0.0'
const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); 
app.use(cookieParser());

mongoose
    .connect(process.env.MONGODB)
    .then(() => {
        console.log('Successfully connected to database');
        console.log('-----------------------------');
    })
    .catch((err) => {
        console.log(err);
    })

app.use(express.static(path.join(__dirname)))
app.listen(3000, () => {
  console.log('-----------------------------');
  console.log(`Eleganza Server ${vers}`);
  console.log(`Port: 3000`);
  console.log('-----------------------------');
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client','dist','index.html'));
})
app.use('/api/v1/user', API_userRoute);
app.use('/api/v1/product', API_productRoute);
app.use('/api/v1/admin', API_adminRoute);
app.use('/api/v1/web', API_webRoute);
app.use('/api/v1/brand', API_brandRoute);
app.use('/api/v1/chat', API_chat);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json(
        serverResponse(false, statusCode, message)
    );
});
app.get('/', (req, res) => {
    return serverOk(res);
});