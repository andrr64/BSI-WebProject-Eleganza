import { Product } from "../models/product.model.js";
import { serverNotFound, serverInternalError, serverResponse, serverBadRequest, serverOk, serverNotAcceptable } from "../controllers/response.controller.js";

const NAME_WRONG = 1;
const PRICE_WRONG = 2;
const DISCOUNT_WRONG = 3;
const STOCK_WRONG = 4;
const PICTURE_EMPTY = 5;

export const createProduct = async (req, res, next) => {
    try {
        const { name, list_picture, price, discount, stock } = req.body;
        const filterData = _productDataFilter(name, list_picture, price, discount, stock);
        if (filterData.code !== 0) return serverBadRequest(res, filterData.message);
        await new Product({
            name: name,
            list_picture: list_picture,
            price: price,
            discount: discount,
            stock: stock,
            hidden: false,
            previous_version: 'null'
        }).save();
        return serverOk(res);
    } catch (error) {
        next(error);
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { name, list_picture, price, discount, stock } = req.body;
        const filterData = _productDataFilter(name, price, discount, stock);
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
            hidden: false
        });

        oldProduct.hidden = true;
        await oldProduct.save();
        await newProduct.save();
        serverOk(res, newProduct);
    } catch (error) {
        return serverInternalError(res);
    }
}

export const getProduct = async(req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id, 'name list_picture price discount stock');
        if (!product) return serverNotFound(res);
        return serverOk(res, product);
    } catch (error) {
        res.status(500).json(serverBadRequest());
    }
}

const _productDataFilter = (name, list_picture, price, discount, stock) => {
    if (!name) {
        return {
            code: NAME_WRONG,
            message: 'Name is required!'
        };
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