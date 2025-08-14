import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api.js';  

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/products/get-all-products");
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((item) => item._id === product._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <div className="w-full min-h-screen bg-[#fffbf2] py-10 px-4">
      <h2 className="text-center text-2xl font-bold text-[#444444] mb-8">
        Our Products
      </h2>

      {/* Cards Wrapper */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full p-4 shadow-lg rounded-lg bg-white"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[200px] object-cover mb-2 border-2 border-[#009688] rounded"
            />
            <img
              src="/Frame 11.svg"
              alt="Frame"
              className="mb-2 self-start"
            />
            <h3 className="text-left text-black text-sm font-semibold w-full">
              {product.title}
            </h3>
            <p className="text-left text-xs text-gray-600 w-full">
              {product.description}
            </p>
            <p className="text-left text-sm text-[#009688] font-bold mt-2 w-full">
              {product.price}
            </p>
            <button
              className="bg-amber-100 rounded px-3 py-2 mt-auto hover:bg-amber-200 transition"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
