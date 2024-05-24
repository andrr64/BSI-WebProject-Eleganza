import express from 'express';
import {createProduct, getProduct, getProductByBrand, updateProduct} from '../controllers/product.controller.js';

const router = express.Router();

router.post('/create', createProduct);
router.post('/update/:id', updateProduct);
router.get('/get/:id', getProduct);
router.get('/get/brand/:brand_name', getProductByBrand)

export default router;