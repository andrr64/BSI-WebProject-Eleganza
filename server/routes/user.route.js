import express from "express";
import { createUser,isTokenOk,loginUser } from "../controllers/user.controller.js";


const router = express.Router();

router.post('/create', createUser);
router.post('/login', loginUser);
router.get('/check-token', isTokenOk);

export default router;