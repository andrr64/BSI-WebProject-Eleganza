import mongoose from "mongoose";

const userDataSchema = mongoose.Schema({
    cart: {
        type: [String],
        default: []
    },
    address: {
        type: [Object],
        default: []
    }
})

export const UserData = mongoose.model('user_data', userDataSchema);