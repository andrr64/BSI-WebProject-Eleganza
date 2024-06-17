import express from "express";
import { createUser,isTokenOk,loginUser } from "../controllers/user.account.controller.js";
import { addItem } from "../controllers/user.cart.items.controller.js";


const router = express.Router();

router.post('/create', createUser);
router.post('/login', loginUser);
router.get('/check-token', isTokenOk);

router.post('/cart/:id', addItem);

export default router;