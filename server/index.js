import express from 'express';
import cookieParser from 'cookie-parser'; // Optional, if using cookies
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import API_userRoute from './routes/user.route.js';
import API_productRoute from './routes/product.route.js';
import API_adminRoute from './routes/admin.route.js';
import API_webRoute from './routes/web.route.js';
import API_brandRoute from './routes/brand.route.js';
import { serverResponse } from './controllers/response.controller.js';

const app = express();
const vers = '1.0.0'

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
app.listen(3000, () => {
  console.log('-----------------------------');
  console.log(`Eleganza Server ${vers}`);
  console.log(`Port: 3000`);
  console.log('-----------------------------');
});
app.use('/api/v1/user', API_userRoute);
app.use('/api/v1/product', API_productRoute);
app.use('/api/v1/admin', API_adminRoute);
app.use('/api/v1/web', API_webRoute);
app.use('/api/v1/brand', API_brandRoute);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json(
        serverResponse(false, statusCode, message)
    );
});
app.get('/', (request, response) => {
    response.status(200).send(`
        <h1>
            Eleganza-Server ${vers}
        </h1>
    `);
});