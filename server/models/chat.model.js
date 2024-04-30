import mongoose from "mongoose";
const chatSchema = mongoose.Schema({
    user_ref: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    list_picture: {
        type: [String],
        required: true
    }
})

export const Chat = mongoose.model('Chat', chatSchema);