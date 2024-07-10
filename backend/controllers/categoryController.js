import mongoose from "mongoose";

import asyncHandler from "../middlewares/asyncHandler.js";
import Category from "../models/categoryModel.js";

const addCategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.json("categoryName is required");
    }

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.json({ error: "Already exists" });
    }

    const category = await new Category({ name });
    const savedCategory = await category.save();
    console.log(savedCategory);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
});

const listCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
});

export { listCategories, addCategory };
