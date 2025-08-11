import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express()

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
import cookieParser from 'cookie-parser';

import userRoute from "./Routes/userRoute.js";
import productRoute from "./Routes/productRoutes.js";
import orderRoute from "./Routes/orderRoutes.js";

mongoose.connect("mongodb://localhost:27017/backend")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });


app.get("/", (req, res) => {
  return res.status(200).send("Backend is running successfully");
});


app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/products",productRoute);
app.use("/api/orders",orderRoute);

app.listen(2000, () => console.log(" Server running on port 2000"));






