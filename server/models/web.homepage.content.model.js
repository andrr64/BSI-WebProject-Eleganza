import mongoose, { Schema } from "mongoose";

export const HOMEPAGETYPE = {
    collection: 'collection'
}

export const homepageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    layout_config: {
        type: String,
        required: true
    },
    index: {
        type: Number,
        required: true
    },
    data: {
        type: Schema.Types.Mixed,
        required: true
    }
})

export const HomepageContent = mongoose.model('homepage_content', homepageSchema); 