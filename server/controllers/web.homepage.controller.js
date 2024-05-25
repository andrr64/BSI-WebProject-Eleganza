import { HomepageContent } from "../models/web.homepage.content.model.js";
import { serverBadRequest, serverForbidden, serverNotFound, serverOk } from "./response.controller.js";
import { MESSAGE, serverLog } from "./server.log.controller.js";
import { isTokenValid } from "../security/admin.security.js";

/**
 * Membuat konten homepage baru dan menyimpannya ke dalam database.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const createHomepageContent = async(req, res) => {
    try {
        const verifyAdmin = await isTokenValid(req.cookies.access_token);
        if (!verifyAdmin.status){
            serverForbidden(res);
            return serverLog(MESSAGE.ENDOF_REQUEST);
        }
        serverLog(MESSAGE.STARTOF_REQUEST, 'New request accepted: create web.homepage.content');
        const body = req.body;

        // Membuat item homepage baru
        const newHomepageItem = new HomepageContent({
            title: body.title,
            index: body.index,
            type: body.type,
            layout_config: body.layout_config,
            data: body.data
        });

        // Menyimpan item homepage baru ke database
        await newHomepageItem.save();

        // Mengirim respon sukses
        serverOk(res, 'ok');
    } catch (error) {
        // Log kesalahan dan mengirim respon error
        serverLog(MESSAGE.FAILURE, error.message);
        serverLog(MESSAGE.SENDING);
        serverBadRequest(res, error.message);
    }
    // Log akhir request
    return serverLog(MESSAGE.ENDOF_REQUEST);
}

/**
 * Mengambil semua konten homepage dari database dan mengirimnya kembali ke client.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const getHomepageContent = async(req, res) => {
    serverLog(MESSAGE.STARTOF_REQUEST, 'New request accepted: get web.homepage.content');
    try {
        // Mengambil semua item homepage dari database
        let homepageItems = await HomepageContent.find({});
        if (homepageItems.length === 0){ 
            serverLog(MESSAGE.SENDING);
            serverNotFound(res);
            return;
        }

        // Mengurutkan homepageItems berdasarkan nilai index dari elemen pertama
        homepageItems = homepageItems.sort((a, b) => a.index - b.index);

        // Mengirim respon sukses dengan data yang diambil
        serverOk(res, homepageItems);
    } catch (error) {
        // Log kesalahan dan mengirim respon error
        serverLog(MESSAGE.FAILURE, error.message);
        serverLog(MESSAGE.SENDING);
        serverBadRequest(res, 'error fetching data');
    } finally{
        return serverLog(MESSAGE.ENDOF_REQUEST);
    }
    // Log akhir request
}
