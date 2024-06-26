import express from 'express';
import {createProduct,getAllProduct, getProduct, getProductByBrand, updateProduct} from '../controllers/product.controller.js';

const router = express.Router();

router.post('', createProduct);
router.put('/:id', updateProduct);
router.get('/:id', getProduct);
router.get('/brand/:id', getProductByBrand)
router.get('', getAllProduct);

export default router;