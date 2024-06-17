import mongoose from "mongoose";

const schema = new mongoose.Schema({
    user_id: {
        type: Object,
    },
    product_id: {
        type: Object
    },
    quantity: {
        type: Number
    },
    note: {
        type: String
    },
    size_index: {
        type: Number
    },
    index: {
        type: Number
    }
}, {timestamps: true})

export const CartItems = mongoose.model('user.cart.items', schema);