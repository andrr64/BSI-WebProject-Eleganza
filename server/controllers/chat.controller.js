import { Chat } from "../models/chat.model.js";
import { serverOk } from "./response.controller.js";
import { serverProcess } from "./server.process.controller.js"
import {validateClientToken } from "./user.account.controller.js";

export const sendMessage = async(req, res) => {
    await serverProcess(res, async () => {
        const {access_token} = req.cookies;
        console.log(req.cookies);
        const validToken = await validateClientToken(access_token);
        if (!validToken){
            throw new Error('Unauthorized');
        }
        const {user_ref, message, list_picture} = req.body;

        const isUserExist = await isUserExist(user_ref);
        console.log(isUserExist);

        const newMessage = new Chat({
            user_ref,
            message,
            list_picture
        });
        await newMessage.save();
        serverOk(res);
    }, 'send message');
}   