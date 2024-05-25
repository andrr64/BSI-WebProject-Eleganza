import mongoose from "mongoose";

const userAccountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    data_ref: {
        type: String,
        required: true
    },
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