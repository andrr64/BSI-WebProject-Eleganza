import { Product } from "../models/product.model.js";
import { serverNotFound, serverBadRequest, serverOk, serverNotAcceptable, serverCreatedOk } from "../controllers/response.controller.js";
import { serverProcess } from "./server.process.controller.js";
import { MESSAGE, serverLog } from "./server.log.controller.js";
import { Brand } from "../models/brand.model.js";

/**
 * Membuat produk baru dan menyimpannya ke dalam database.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const createProduct = async (req, res) => {
    await serverProcess(res, async () => {
        const { name, brand_id, category, sex, list_size, list_picture, price, discount, stock } = req.body;

        if (!list_picture){
            return serverBadRequest(res, 'images is required!');
        }

        const newProduct = new Product({
            name: name,
            brand_id: brand_id,
            category: category,
            sex: sex,
            list_size: list_size,
            list_picture: list_picture,
            price: price,
            discount: discount,
            stock: stock,
            hidden: false,
            previous_version: 'null'
        });
        const brand = await Brand.findById(brand_id);
        if (!brand) return serverBadRequest(res, 'brand not found');
        await newProduct.save();
        serverCreatedOk(res);
    }, 'create product');
}

/**
 * Memperbarui produk yang ada di database.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const updateProduct = async (req, res) => {
    await serverProcess(res, async () => {
        const { name, brand_id, category, sex, list_size, list_picture, price, discount, stock } = req.body;
        const oldProduct = await Product.findById(req.params.id);
        
        if (oldProduct.hidden === true) return serverNotAcceptable(res);

        const newProduct = new Product({
            name: name,
            brand_id: brand_id,
            category: category,
            sex: sex,
            list_size: list_size,
            list_picture: list_picture,
            price: price,
            discount: discount,
            stock: stock,
            hidden: false,
            previous_version: oldProduct._id
        });

        oldProduct.hidden = true;
        await oldProduct.save();
        await newProduct.save();
        serverLog(MESSAGE.OK);
        serverOk(res, newProduct);
    }, 'update product');
}

/**
 * Mengambil detail produk berdasarkan ID.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const getProduct = async(req, res) => {
    await serverProcess(res, async () => {
        const id = req.params.id;
        const product = await Product.findById(id);
        const brand = await Brand.findById(product.brand_id);
        if (!product) return serverNotFound(res);
        serverOk(res, {'product': product, 'brand': brand});
    }, 'get product by id');
}

/**
 * Mengambil produk berdasarkan nama merek (brand).
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const getProductByBrand = async(req, res) => {
    await serverProcess(res, async () => {
        const id = req.params.id;
        const products = await Product.find({brand_id: id});
        if (!products.length) return serverNotFound(res, "No products found for this brand.");
        serverOk(res, products);
    }, 'get products by brand');
}