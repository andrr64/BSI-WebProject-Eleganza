import express from 'express';
import {createProduct, getProduct, getProductByBrand as getProductsByBrand, updateProduct} from '../controllers/product.controller.js';

const router = express.Router();

router.post('', createProduct);
router.put('/:id', updateProduct);
router.get('/:id', getProduct);
router.get('/brand/:id', getProductsByBrand)

export default router;