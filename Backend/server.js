import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import userRoute from "./Routes/userRoute.js";
import productRoute from "./Routes/productRoutes.js";
import orderRoute from "./Routes/orderRoutes.js";

// ✅ Load environment variables
dotenv.config();

const app = express();

// ✅ Allowed origins (local + deployed frontend)
const allowedOrigins = [
  "http://localhost:5173",
  "https://backend-project-rvy1.vercel.app" // 🔹 Add your Vercel frontend URL here
];

// ✅ Dynamic CORS handling
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS policy does not allow this origin."), false);
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/backend")
  .then(() => {
    console.log("✅ Database connected successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB connection error:", err);
  });

// ✅ Test route
app.get("/", (req, res) => {
  return res.status(200).send("Backend is running successfully");
});

// ✅ API Routes
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

// ✅ Start server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));







