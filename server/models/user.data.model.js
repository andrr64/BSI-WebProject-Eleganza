import mongoose from "mongoose";

const userDataSchema = mongoose.Schema({
    user_ref: {
        type: String,
        unique: true,
        required: true
    },
    chart: {
        type: [String],
        unique: true,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

export const UserData = mongoose.model('user_data', userDataSchema);