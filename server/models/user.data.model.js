import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
    cart: {
        type: [String],
        default: []
    },
    address: {
        type: [Object],
        default: []
    }
}, {timestamps: true})

export const UserData = mongoose.model('user_data', userDataSchema);