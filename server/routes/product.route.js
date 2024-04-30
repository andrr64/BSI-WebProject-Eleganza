import express from 'express';
import {createProduct, updateProduct} from '../controllers/product.controller.js';

const router = express.Router();

router.post('/create', createProduct);
router.post('/update/:id', updateProduct);

export default router;