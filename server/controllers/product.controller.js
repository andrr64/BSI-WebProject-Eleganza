import { Product } from "../models/product.model.js";
import { serverNotFound, serverInternalError, serverBadRequest, serverOk, serverNotAcceptable } from "../controllers/response.controller.js";
import { uploadImages } from "./product.images.controller.js";

// Kode status untuk validasi data produk
const NAME_WRONG = 1;
const PRICE_WRONG = 2;
const DISCOUNT_WRONG = 3;
const STOCK_WRONG = 4;
const PICTURE_EMPTY = 5;
const BRAND_EMPTY = 6;

/**
 * Membuat produk baru dan menyimpannya ke dalam database.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 * @param {Function} next - Fungsi middleware untuk menangani error.
 */
export const createProduct = async (req, res, next) => {
    try {
        const { name, brand, category, sex, list_size, price, discount, stock } = req.body;
        const files = req.files; // File yang diunggah

        // Membuat dan menyimpan produk baru
        const newProduct = new Product({
            name: name,
            brand: brand,
            category: category,
            sex: sex,
            list_size: list_size,
            price: price,
            discount: discount,
            stock: stock,
            hidden: false,
            previous_version: 'null'
        });

        await newProduct.save();

        // Mengunggah dan menyimpan gambar terkait produk
        await uploadImages(files, newProduct._id);

        return serverOk(res);
    } catch (error) {
        next(error);
    }
}

/**
 * Memperbarui produk yang ada di database.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const updateProduct = async (req, res) => {
    try {
        const { name, list_picture, price, discount, stock, collection } = req.body;
        const filterData = _productDataFilter(name, list_picture, price, discount, stock);
        if (filterData.code !== 0) return serverBadRequest(res, filterData.message);
        
        const oldProduct = await Product.findById(req.params.id);
        
        if (oldProduct.hidden === true) return serverNotAcceptable(res);

        const newProduct = new Product({
            name: name,
            list_picture: list_picture,
            previous_version: req.params.id,
            price: price,
            discount: discount,
            stock: stock,
            collection: collection,
            hidden: false
        });

        oldProduct.hidden = true;
        await oldProduct.save();
        await newProduct.save();
        return serverOk(res, newProduct);
    } catch (error) {
        return serverInternalError(res);
    }
}

/**
 * Mengambil detail produk berdasarkan ID.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const getProduct = async(req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id, 'name list_picture price discount stock');
        if (!product) return serverNotFound(res);
        return serverOk(res, product);
    } catch (error) {
        return serverInternalError(res)
    }
}

/**
 * Mengambil produk berdasarkan nama merek (brand).
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 */
export const getProductByBrand = async(req, res) => {
    try {
        const brandName = req.params.brand_name;
        const products = await Product.find({brand: brandName});
        if (!products.length) return serverNotFound(res, "No products found for this brand.");
        return serverOk(res, products);
    } catch (error) {
        
    }
}

/**
 * Melakukan validasi data produk sebelum penyimpanan.
 * @param {string} name - Nama produk.
 * @param {Array} list_picture - Array gambar produk.
 * @param {number} price - Harga produk.
 * @param {number} discount - Diskon produk.
 * @param {number} stock - Stok produk.
 * @param {string} brand - Merek produk.
 * @returns {Object} Objek yang berisi kode validasi dan pesan kesalahan jika ada.
 */
const _productDataFilter = (name, list_picture, price, discount, stock, brand) => {
    if (!name) {
        return {
            code: NAME_WRONG,
            message: 'Name is required!'
        };
    }
    if (!brand) {
        return {
            code: BRAND_EMPTY,
            message: 'Brand is required!'
        }
    }
    if(list_picture.length <= 0){
        return {
            code: PICTURE_EMPTY,
            message: 'Image required min. 1 image'
        }
    }
    if (!price || price <= 0 || price >= 1_000_000_000) {
        return {
            code: PRICE_WRONG,
            message: 'Price must be a positive number or less than 1,000,000,000'
        };
    }
    if (discount < 0 || discount >= 100) {
        return {
            code: DISCOUNT_WRONG,
            message: 'Discount must be between 0 and 100!'
        };
    }
    if (!stock || stock <= 0 || stock >= 1000000) {
        return {
            code: STOCK_WRONG,
            message: 'Stock must be a positive number! or less than 1,000,000'
        };
    }
    return {
        code: 0,
        message: 'Product data is valid.'
    };
}
