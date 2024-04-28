import jwt from 'jsonwebtoken';
import { serverResponse } from '../controllers/response.controller.js';

export const isTokenValid = async (token) => {
    return new Promise((resolve, reject) => {
        if (!token) {
            resolve(serverResponse(false, 401, 'Unauthorized'));
        }
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err) => {
            if (err) {
                resolve(serverResponse(false, 403, 'Forbidden'));
            }
            resolve(serverResponse(true, 200));
        });
    });
};
