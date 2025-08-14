import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import userRoute from "./Routes/userRoute.js";
import productRoute from "./Routes/productRoutes.js";
import orderRoute from "./Routes/orderRoutes.js";

dotenv.config();

const app = express();

// Allowed origins
const allowedOrigins = [
  "http://localhost:5173",                 // local dev frontend
  "https://your-frontend-domain.com",      // <-- change to your real frontend URL
  "https://backend-project-pbb3.vercel.app" // add your deployed frontend URL here
];

app.use(cors({
  origin: function(origin, callback) {
    // For tools like Postman or curl (no origin)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error("CORS policy does not allow this origin."), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
const MONGO_URL = MONGO_URL || "mongodb://localhost:27017/backend";

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Database connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.status(200).send("Backend is running successfully");
});

// Routes
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

// Error handling middleware (optional but recommended)
app.use((err, req, res) => {
  console.error(err.stack);
  if (err.message && err.message.includes("CORS")) {
    return res.status(403).json({ message: err.message });
  }
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = 2000
app.listen(2000, () => console.log(" Server running on port 2000"));  





