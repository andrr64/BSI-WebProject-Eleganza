import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
    user_ref: {
        type: String,
        required: true
    },
    items: {
        type: [Object],
        required: true
    },
    address: {
        type: String, required: true
    },
    name: {
        type: String, required: true,
    },
    contact: {
        type: String, required: true,
    },
    status: {
        type: Number,
        required: false
    }
})

export const Transaction = mongoose.model('user.transaction', transactionSchema);