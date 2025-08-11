// import express from "express";
// import { createOrder, getMyOrders } from "../controller/orderController.js";
// import { verifyUser } from "../Utils/auth.js";
// const router = express.Router();

// router.post("/create-order",verifyUser,createOrder);
// router.get("/my-orders",verifyUser,getMyOrders);

// export default router;

import express from "express";
import { createOrder, getMyOrders, getAllOrders } from "../controllers/orderController.js";
import { verifyUser, verifyAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create a new order (User only)
router.post("/", verifyUser, createOrder);

// Get my orders (User only)
router.get("/my", verifyUser, getMyOrders);

// Get all orders (Admin only)
router.get("/", verifyAdmin, getAllOrders);

export default router;



