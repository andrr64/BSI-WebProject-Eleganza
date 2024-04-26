import express from 'express';
import cookieParser from 'cookie-parser'; // Optional, if using cookies
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import API_userRoute from './routes/user.route.js'
import { serverResponse } from './controllers/response.controller.js';

const app = express();
const vers = '1.0.0'
dotenv.config();

app.use(express.json()); 
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
  console.log(`Elenza Server ${vers}`);
  console.log('-----------------------------');
});
app.use('/api/user', API_userRoute);
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
            Elenza-Server ${vers}
        </h1>
    `);
});
