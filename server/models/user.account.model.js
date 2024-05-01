import mongoose from "mongoose";

const userAccountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        default: ''
    }
}, {timestamps: true});

export const UserAccount = mongoose.model('user_account', userAccountSchema);