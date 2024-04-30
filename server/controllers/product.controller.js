import { Product } from "../models/product.model.js";
import { serverResponse } from "../controllers/response.controller.js";

const NAME_WRONG = 1;
const PRICE_WRONG = 2;
const DISCOUNT_WRONG = 3;
const STOCK_WRONG = 4;

export const createProduct = async (req, res, next) => {
    try {
        const { name, price, discount, stock } = req.body;
        const filterData = productDataFilter(name, price, discount, stock);
        if (filterData.code !== 0) {
            res.status(400).json(
                serverResponse(
                    false,
                    filterData.code,
                    filterData.message
                )
            );
            return; 
        }
        const newProduct = new Product({
            name,
            price,
            discount,
            stock,
            hidden: false,
            previous_version: 'null'
        });
        await newProduct.save();
        res.status(201).json(
            serverResponse(true, 201, 'Product created successfully!')
        );
    } catch (error) {
        next(error);
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        const { name, price, discount, stock } = req.body;
        const filterData = productDataFilter(name, price, discount, stock);
        if (filterData.code !== 0) {
            res.status(400).json(
                serverResponse(
                    false,
                    400,
                    filterData.message
                )
            );
            return;
        }
        const updatedData = {
            name,
            price,
            discount,
            stock,
        };
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            updatedData,
            { new: true }
        );
        if (updatedProduct) {
            res.status(200).json(
                serverResponse(true, 200, 'Product updated successfully!')
            );
        } else {
            res.status(404).json(
                serverResponse(false, 404, 'Product not found!')
            );
        }
    } catch (error) {
        next(error);
    }
}

export const productDataFilter = (name, price, discount, stock) => {
    if (!name) {
        return {
            code: NAME_WRONG,
            message: 'Name is required!'
        };
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