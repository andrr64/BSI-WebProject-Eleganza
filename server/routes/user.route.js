import express from "express";
import { createUser,isTokenOk,loginUser } from "../controllers/user.account.controller.js";
import { addItemToCart, getUserData, updateUserData } from "../controllers/user.data.controller.js";


const router = express.Router();

router.post('/create', createUser);
router.post('/login', loginUser);
router.get('/check-token', isTokenOk);

router.get('/data/:id', getUserData)
router.put('/data/:id', updateUserData);

router.post('/data/cart/:id', addItemToCart);

export default router;