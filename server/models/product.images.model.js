import mongoose from "mongoose";

const productImageSchema = new mongoose.Schema({
    file: {
        type: Buffer, // Untuk menyimpan data biner gambar
        required: true
    },
    index: {
        type: Number,
        required: true
    },
    product_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
}, {timestamps: true});

export const ProductImage = mongoose.model('ProductImage', productImageSchema);