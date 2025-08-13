// import express from "express";
// import { createOrder } from "../controller/orderController.js";
// import { verifyUser } from "../Utils/auth.js";
// const router = express.Router();

// router.post("/create-order",verifyUser,createOrder);
// // router.get("/my-orders",verifyUser,getMyOrders);

// export default router;
import express from "express";
import { createOrder } from "../controller/orderController.js";
import { verifyUser } from "../Utils/auth.js";

const router = express.Router();

// ✅ verifyUser ko middleware me lagao
router.post("/create", verifyUser, createOrder);

export default router;
