import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  order_data: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
