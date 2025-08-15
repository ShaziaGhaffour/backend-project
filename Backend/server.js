// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";

// // Routes
// import userRoute from "./Routes/userRoute.js";
// import productRoute from "./Routes/productRoutes.js";
// import orderRoute from "./Routes/orderRoutes.js";

// // Load environment variables
// dotenv.config();

// const app = express();

// // Allowed origins
// const allowedOrigins = [
//   "http://localhost:5173", // local frontend
//   "https://your-frontend.vercel.app" // apna real vercel frontend URL yahan daalein
// ];

// // CORS
// // app.use(cors({
// //   origin: function (origin, callback) {
// //     if (!origin || allowedOrigins.includes(origin)) {
// //       callback(null, true);
// //     } else {
// //       callback(new Error("CORS policy does not allow this origin."), false);
// //     }
// //   },
// //   credentials: true
// // }));
// app.use(cors({
//   origin: ["https://backend-project-dotl.vercel.app"], 
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));

// app.use(express.json());
// app.use(cookieParser());
// mongoose.connect("mongodb://localhost:27017/backend", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log("✅ Database connected successfully");
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection error:", err.message);
//   });
// app.get("/", (req, res) => {
//   res.status(200).send("Backend is running successfully");
// });

// // API routes
// app.use("/api/users", userRoute);
// app.use("/api/products", productRoute);
// app.use("/api/orders", orderRoute);
// const PORT = 2000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// Routes
import userRoute from "./Routes/userRoute.js";
import productRoute from "./Routes/productRoutes.js";
import orderRoute from "./Routes/orderRoutes.js";

// Load environment variables
dotenv.config();

const app = express();

// ✅ CORS Setup
app.use(cors({
  origin: process.env.FRONTEND_URL, 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("✅ Database connected successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

// Test route
app.get("/", (req, res) => {
  res.status(200).send("Backend is running successfully");
});

// API routes
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

// ✅ Render will set PORT automatically
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});









