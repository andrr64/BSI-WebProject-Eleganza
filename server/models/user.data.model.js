import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
    cart: {
        type: [Object],
        default: []
    },
    address: {
        type: [Object],
        default: []
    },
    user_ref: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const UserData = mongoose.model('user_data', userDataSchema);