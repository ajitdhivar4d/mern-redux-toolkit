//package / Module Imports
import path from "path";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

//Utility Function
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import userRoutes from "./routes/userRoutes.js";

//Load Environment Variables
dotenv.config();

// Set Port
const port = process.env.PORT || 5000;

//Connect to Database
connectDB();

//Initialize Express Application
const app = express();

//Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Define Routes
// app.get("/", (req, res) => {
//   res.send("Hello ");
// });

app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/users", userRoutes);

// Start the Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
