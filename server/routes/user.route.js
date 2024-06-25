import express from "express";
import { createUser,isTokenOk,loginUser } from "../controllers/user.account.controller.js";
import { addItem, delCartItems, getCartItems, getCartItemsLength } from "../controllers/user.cart.items.controller.js";
import { addTransaction } from "../controllers/user.transaction.controller.js";


const router = express.Router();

router.post('/create', createUser);
router.post('/login', loginUser);
router.get('/check-token', isTokenOk);

router.post('/cart/:id', addItem);
router.get('/cart/length/:id', getCartItemsLength);
router.get('/cart/:id', getCartItems);
router.delete('/cart/:id', delCartItems);

router.post('/transaction', addTransaction);

export default router;