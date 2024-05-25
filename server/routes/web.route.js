import express from "express";
import { createHomepageContent, getHomepageContent } from "../controllers/web.homepage.controller.js";

const router = express.Router();

router.post('/homepage/create', createHomepageContent);
router.get('/homepage/get', getHomepageContent);
router.get('/homepage/get/:title')

export default router;