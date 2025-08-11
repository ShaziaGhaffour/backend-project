import React, { useState, useEffect } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    const updatedCart = cartItems.map(item =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // 🛒 Buy Now per product
  const handleBuyNow = async (item) => {
    try {
      const orderData = {
        products: [
          {
            productId: item._id,
            quantity: item.quantity
          }
        ]
      };

      const response = await axios.post(
        "http://localhost:2000/api/orders/create-order",
        orderData,
        { withCredentials: true }
      );

      alert(response.data.message);

      // ✅ Add this item to Wishlist
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      wishlist.push(item);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      // ✅ Remove item from cart
      const updatedCart = cartItems.filter(cartItem => cartItem._id !== item._id);
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // ✅ Redirect to Wishlist
      navigate("/wishlist");

    } catch (error) {
      console.error(error);
      alert("Failed to place order");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">CART</h1>

      <div className="border-2 border-blue-400 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 grid grid-cols-7 gap-4 p-4 font-semibold text-gray-700 border-b">
          <div>IMAGE</div>
          <div>PRODUCT NAME</div>
          <div>PRICE</div>
          <div>QUANTITY</div>
          <div>ACTION</div>
          <div>TOTAL</div>
          <div>BUY NOW</div>
        </div>

        {/* Cart Items */}
        <div className="min-h-32">
          {cartItems.length === 0 ? (
            <div className="p-8 text-center text-gray-500">Your cart is empty</div>
          ) : (
            cartItems.map(item => (
              <div key={item._id} className="grid grid-cols-7 gap-4 p-4 border-b border-gray-200 items-center">
                <div>
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                </div>
                <div className="font-medium text-gray-800">{item.title}</div>
                <div className="text-gray-600">${item.price}</div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full hover:bg-green-200"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div>
                  <button 
                    onClick={() => removeItem(item._id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="font-semibold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <div>
                  <button
                    onClick={() => handleBuyNow(item)}
                    className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer - Only shows total */}
        {cartItems.length > 0 && (
          <div className="bg-gray-50 p-4 flex justify-end">
            <div className="text-lg font-bold text-gray-800">
              Grand Total: ${getTotalPrice().toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
