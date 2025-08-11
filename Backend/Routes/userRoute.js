
import express from "express";
import upload from "../Utils/upload.js"; 
import { signup,login ,updateUser,deleteUser,getAllUsers } from "../controller/userController.js";

const router = express.Router();
router.post("/signup", signup);
 router.post("/login", login);

router.put("/update/:id", upload.single("image"), updateUser);
router.delete("/delete/:id", deleteUser);
router.get("/get-all-users", getAllUsers);

export default router;
