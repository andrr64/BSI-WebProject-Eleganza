import mongoose from "mongoose";

const userAccountSchema = new mongoose.Schema({
    name: {
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
        default: 'https://firebasestorage.googleapis.com/v0/b/andreas-web-cloud-5c228.appspot.com/o/default%2Fprofile_picture.png?alt=media&token=b96dcbb7-dcf1-4943-8166-83ec00ac9fa1'
    }
}, {timestamps: true});

export const UserAccount = mongoose.model('user.account', userAccountSchema);