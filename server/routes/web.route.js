import express from "express";
import { createHomepageContent, getHomepageContent } from "../controllers/web.homepage.controller.js";

const router = express.Router();

router.post('/homepage', createHomepageContent);
router.get('/homepage', getHomepageContent);

export default router;