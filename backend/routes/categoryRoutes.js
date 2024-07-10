import express from "express";
import { listCategories } from "../controllers/categoryController.js";

const router = express.Router();

router.route("/categories").get(listCategories);

export default router;
