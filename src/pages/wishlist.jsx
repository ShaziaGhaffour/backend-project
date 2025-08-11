import React, { useEffect, useState } from "react";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);

  const uniqueWishlist = wishlistItems.filter(
  (item, index, self) =>
    index === self.findIndex((i) => i._id === item._id)
);
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
//         wishlistItems.map((item, index) => (
//   <div key={`${item._id}-${index}`} className="flex items-center gap-4 border-b py-4">
//     <img src={item.image} alt={item.title} className="w-16 h-16 rounded object-cover" />
//     <div>
//       <h2 className="font-semibold">{item.title}</h2>
//       <p className="text-gray-600">${item.price}</p>
//       <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
//     </div>
//   </div>
// ))
uniqueWishlist.map((item) => (
  <div key={item._id} className="flex items-center gap-4 border-b py-4">
    <img src={item.image} alt={item.title} className="w-16 h-16 rounded object-cover" />
    <div>
      <h2 className="font-semibold">{item.title}</h2>
      <p className="text-gray-600">${item.price}</p>
      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
    </div>
  </div>
))
      )}
    </div>
  );
}
