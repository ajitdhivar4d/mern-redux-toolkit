import express from "express";
const router = express.Router();

//Controllers
import { fetchAllProducts } from "../controllers/productController.js";

router.route("/allproducts").get(fetchAllProducts);

export default router;
