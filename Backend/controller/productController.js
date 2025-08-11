import Product from "../models/Product.js";
export const addProduct = async (req, res) => {
  try {
    // console.log("Incoming data:", req.body);  

    const { title, price, image, description } = req.body;

    if (!title || !price || !image || !description) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newProduct = new Product({ title, price, image, description });
    await newProduct.save();

    res.status(201).json({ message: "Product added successfully." });
  } catch (error) {
    console.error("Add Product Error:", error);
    res.status(500).json({ message: "Failed to add product.", error: error.message });
  }
};

export const getAllProducts = async(req,res)=>{
  try {
    const products = await Product.find();
    if(products === null){
      res.status(404).json({message:"No product found"});
    }
    res.status(200).json({products});
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error"});
  }
}

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, price } = req.body;
    if (!title || !description || !image || !price) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { title, description, image, price },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
      message: 'Product updated successfully',
      product: updatedProduct
    });
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteProduct = async(req,res)=>{
  try {
    const id = req.params.id;
    if(!id){
      res.status(400).json({message:"Id required"});
    }
    await Product.findOneAndDelete(id);
    res.status(200).json({message:"Product deleted successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error"});
  }
}