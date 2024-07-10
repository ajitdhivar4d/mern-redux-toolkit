import mongoose from "mongoose";

import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

const fetchAllProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
    // console.log(products);
    // res.json({ message: "Hello from productController" });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
});

// const addProduct = asyncHandler(async (req, res) => {
//   try {
//     const { categoryName, name, img, options, description } = req.body;

//     if (!categoryName || !name || !img || !options || !description) {
//       res.status(400).json({ message: "All fields are required" });
//       return;
//     }

//     const product = new Product({
//       categoryName,
//       name,
//       img,
//       options,
//       description,
//     });

//     const createdProduct = await product.save();
//     res.status(201).json(createdProduct);
//   } catch (error) {
//     console.log(error);
//     res.json({ message: error.message });
//   }
// });

export { fetchAllProducts };
