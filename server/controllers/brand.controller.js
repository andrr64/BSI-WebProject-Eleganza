import { Brand } from "../models/brand.model.js";
import { serverNotFound, serverOk, serverBadRequest, serverInternalError, serverCreatedOk } from "./response.controller.js";
import { MESSAGE, serverLog } from "./server.log.controller.js";
import { serverProcess } from "./server.process.controller.js";

/**
 * Membuat brand baru dan menyimpannya ke dalam database.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const createBrand = async (req, res) => {
    await serverProcess(res, async () => {
        const { title, icon, description } = req.body;
        const newBrand = new Brand({ title, icon, description });
        await newBrand.save();
        serverCreatedOk(res, 'Brand created successfully');
    }, 'create brand');
};

/**
 * Mengambil semua brand dari database dan mengirimnya kembali ke client.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const getBrands = async (req, res) => {
    await serverProcess(res, async () => {
        const brands = await Brand.find({});
        if (brands.length === 0) return serverNotFound(res, 'No brands found');
        serverOk(res, brands);
    }, 'get brands');
};

/**
 * Mengambil brand berdasarkan ID dari database dan mengirimnya kembali ke client.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const getBrandById = async (req, res) => {
    await serverProcess(res, async () => {
        const brand = await Brand.findById(req.params.id);
        if (!brand) return serverNotFound(res, 'Brand not found');
        serverOk(res, brand);
    }, 'get brand by id');
};

export const getBrandByName = async (req, res) => {
    await serverProcess(res, async () => {
        // Menggunakan regex untuk pencarian case-insensitive
        const brand = await Brand.findOne({ title: { $regex: new RegExp(`^${req.params.name}$`, 'i') } });
        if (!brand) return serverNotFound(res);
        serverOk(res, brand);
    }, 'get brand by name');
};


/**
 * Mengupdate brand yang ada di database berdasarkan ID.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const updateBrand = async (req, res) => {
    await serverProcess(res, async () => {
        const { title, icon, description } = req.body;
        const updateData = { title, icon, description };
        const updatedBrand = await Brand.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedBrand) return serverNotFound(res, 'Brand not found');
        serverOk(res, updatedBrand);
    }, 'update brand');
};
