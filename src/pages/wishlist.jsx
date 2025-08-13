import React, { useState, useEffect } from "react";
import { Trash2, ShoppingCart } from "lucide-react";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    // 🔧 Remove duplicates based on _id
    const uniqueWishlist = storedWishlist.filter((item, index, self) => 
      index === self.findIndex(t => t._id === item._id)
    );
    
    // If duplicates were found, update localStorage
    if (uniqueWishlist.length !== storedWishlist.length) {
      localStorage.setItem("wishlist", JSON.stringify(uniqueWishlist));
      console.log("🔧 Removed duplicate items from wishlist");
    }
    
    setWishlistItems(uniqueWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    // Confirm before deleting
    if (window.confirm("Are you sure you want to remove this item from wishlist?")) {
      const updatedWishlist = wishlistItems.filter((item) => item._id !== id);
      setWishlistItems(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      alert("Item removed from wishlist!");
    }
  };

  const clearAllWishlist = () => {
    if (window.confirm("Are you sure you want to clear your entire wishlist?")) {
      setWishlistItems([]);
      localStorage.setItem("wishlist", JSON.stringify([]));
      alert("Wishlist cleared successfully!");
    }
  };

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((cartItem) => cartItem._id === item._id);
    
    if (existingItem) {
      // If item already exists, increase quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem._id === item._id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // Add new item with quantity 1
      const newItem = { ...item, quantity: 1 };
      cart.push(newItem);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    
    alert("Item added to cart!");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">MY WISHLIST</h1>
        {wishlistItems.length > 0 && (
          <button
            onClick={clearAllWishlist}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="border-2 border-purple-400 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 grid grid-cols-6 gap-4 p-4 font-semibold text-gray-700 border-b">
          <div>IMAGE</div>
          <div>PRODUCT NAME</div>
          <div>PRICE</div>
          <div>ADD TO CART</div>
          <div>REMOVE</div>
          <div>STATUS</div>
        </div>

        {/* Wishlist Items */}
        <div className="min-h-32">
          {wishlistItems.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              Your wishlist is empty
            </div>
          ) : (
            wishlistItems.map((item, index) => (
              <div
                key={`${item._id}-${index}`} // ✅ Guaranteed unique key
                className="grid grid-cols-6 gap-4 p-4 border-b border-gray-200 items-center"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </div>
                <div className="font-medium text-gray-800">{item.title}</div>
                <div className="text-gray-600">${item.price}</div>
                <div>
                  <button
                    onClick={() => addToCart(item)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => removeFromWishlist(item._id)}
                    className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
                <div className="text-green-600 font-medium">✅ Purchased</div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistItems.length > 0 && (
          <div className="bg-gray-50 p-4 flex justify-center">
            <div className="text-lg font-bold text-gray-800">
              Total Items: {wishlistItems.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}