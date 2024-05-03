import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    list_picture: {
        type: [String],
        required: true
    },
    previous_version: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    collection: {
        type: String,
        required: true
    },
    hidden: {
        type: Boolean,
        required: false
    }
}, {timestamps: true});

export const Product = mongoose.model('Product', productSchema);