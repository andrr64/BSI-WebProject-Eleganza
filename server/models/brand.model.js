import mongoose, { Schema } from "mongoose";

const brandSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: Schema.Types.Mixed,
        required: true
    }
})

export const Brand = mongoose.model('brands', brandSchema);