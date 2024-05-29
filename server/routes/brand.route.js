import express from "express";
import { createBrand, getBrandById, getBrandByName, getBrands, updateBrand } from "../controllers/brand.controller.js";

const router = express.Router();

router.post('/', createBrand);
router.get('/', getBrands);
router.get('/:id', getBrandById);
router.get('/name/:name', getBrandByName);
router.put('/:id', updateBrand);

export default router;