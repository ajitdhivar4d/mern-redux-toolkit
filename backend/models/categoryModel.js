import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
