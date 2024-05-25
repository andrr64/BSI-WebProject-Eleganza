import { Brand } from "../models/brand.model.js";
import { serverNotFound, serverOk } from "./response.controller.js";
import { MESSAGE, serverLog } from "./server.log.controller.js";
import { serverProcess } from "./server.process.controller.js";

/**
 * Membuat brand baru dan menyimpannya ke dalam database.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const createBrand = async(req, res) => {
    await serverProcess(res, async () => {
        serverLog(MESSAGE.STARTOF_REQUEST, 'new request: create brand');
        const {title, icon, description} = req.body;
        const newBrand = new Brand({
            title: title,
            description: description,
            icon: icon
        });
        await newBrand.save();
        serverLog(MESSAGE.OK);
        serverOk(res, 'OK');
    }, 'create brand');
}

/**
 * Mengambil semua brand dari database dan mengirimnya kembali ke client.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const getBrands = async(req, res) => {
    await serverProcess(res, async () => {
        const brands = await Brand.find({});
        if (brands.length === 0){
            serverNotFound(res);
            return;
        }
        serverLog(MESSAGE.SENDING);
        serverOk(res, brands);
        serverLog(MESSAGE.OK);
    }, 'get brands');
}

/**
 * Mengambil brand berdasarkan ID dari database dan mengirimnya kembali ke client.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const getBrandById = async(req, res) => {
    await serverProcess(res, async () => {
        const brand = await Brand.findById(req.params.id);
        if (brand){
            serverOk(res, brand);
            return;
        }
        serverNotFound(res);
    }, 'get brand by id');
}
