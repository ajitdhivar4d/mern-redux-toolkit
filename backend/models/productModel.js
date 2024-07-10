import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const optionSchema = mongoose.Schema({
  regular: {
    type: String,
    required: true,
  },
  medium: {
    type: String,
    required: true,
  },
  large: {
    type: String,
    required: true,
  },
});

const productSchema = mongoose.Schema({
  categoryName: {
    type: ObjectId,
    ref: "Category",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },

  options: {
    type: [optionSchema],
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
