import {User} from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { serverResponse } from './response.controller.js';

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
            serverResponse(
                true, 
                201,
                'User created successfully!'
            )
        );
    } catch (error) {
        next(error);
    }
}