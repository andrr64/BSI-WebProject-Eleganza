import express from "express";
import { createHomepageContent, getContentByTitle, getHomepageContent } from "../controllers/web.homepage.controller.js";

const router = express.Router();

router.post('/homepage', createHomepageContent);
router.get('/homepage', getHomepageContent);
router.get('/homepage/:title', getContentByTitle);``

export default router;