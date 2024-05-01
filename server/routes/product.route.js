import express from 'express';
import {createProduct, getProduct, updateProduct} from '../controllers/product.controller.js';

const router = express.Router();

router.post('/create', createProduct);
router.post('/update/:id', updateProduct);
router.get('/get/:id', getProduct);

export default router;