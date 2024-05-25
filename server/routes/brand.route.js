import express from "express";
import { createBrand, getBrandById, getBrands, updateBrand } from "../controllers/brand.controller.js";

const router = express.Router();

router.post('/', createBrand);
router.get('/', getBrands);
router.get('/:id', getBrandById);
router.put('/:id', updateBrand);

export default router;