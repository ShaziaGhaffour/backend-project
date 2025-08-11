import User from "../models/user.js";
import Product from '../models/Product.js';
import { setUser } from "../Utils/auth.js";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;
    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exist" });
    }
    const newUser = new User({ firstName, lastName, email, phone, password });
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.log("Signup error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and Password are required" });
    }
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(404).json({ message: "User not found" });
    }
    if (findUser.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = await setUser(findUser);
    await res.cookie('token', token,{
      httpOnly:true,
      secure:true
    });
    return res.status(200).json({
      message: "Login successful"
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, password, role, oldImage } = req.body;
    const image = req.file ? req.file.filename : oldImage;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, password, role, image },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.redirect("/home");
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ message: "Error updating user", error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    console.log("api is running......");

    const userId = req.params.id;

    // Check if user exists
    const user = await User.findById(userId);
    console.log("user......", user)
    if (!user) {
      return res.status(404).send("User not found");
    }

    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Delete Error:", err.message);
    res.status(500).send("Error deleting user");
  }
};

