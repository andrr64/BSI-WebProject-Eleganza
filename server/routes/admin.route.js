import express from "express";
import { createAdmin, loginAdmin, getAllTransaction } from "../controllers/admin.controller.js";

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/create', createAdmin);
router.get('/transaction', getAllTransaction);

export default router;