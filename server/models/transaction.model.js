import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
    user_ref: {
        type: String,
        required: true
    },
    list_product: {
        type: [String],
        required: true
    },
    status: {
        type: Number,
        required: false
    }
})

export const Transaction = mongoose.model('Transaction', transactionSchema);