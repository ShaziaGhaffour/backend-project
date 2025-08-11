import express from "express";
import { addProduct, deleteProduct, getAllProducts ,updateProduct} from "../controller/productController.js";
import { verifyUser } from "../Utils/auth.js";
const router = express.Router();

router.post("/add-product",addProduct);
router.get("/get-all-products",getAllProducts);
router.put('/update-product/:id', updateProduct);
router.delete("/delete-product/:id",verifyUser,deleteProduct);

export default router;