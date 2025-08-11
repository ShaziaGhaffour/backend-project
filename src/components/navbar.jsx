
import React, { useState } from 'react';
import { Search, User, ShoppingCart, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="w-full">
      <div className="bg-teal-600 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>About Us</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/Registration">
              <span className="text-white hover:underline cursor-pointer">Register</span>
            </Link>
            <span>|</span>
            <span>Arabic</span>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F7F7] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <img src='/public/logo.png.svg' style={{ width: "150px" }}></img>


            <div className="hidden sm:flex items-center gap-8 text-gray-700">
              <Link to="/Product" className="hover:text-orange-500 transition-colors">PRODUCTS</Link>
              <Link to="/offers" className="hover:text-orange-500 transition-colors">PACKAGES & OFFERS</Link>
              <Link to="/Camera" className="hover:text-orange-500 transition-colors">CAREER SOLUTIONS</Link>
              <Link to="/Villa" className="hover:text-orange-500 transition-colors">NEW VILLA</Link>
              <Link to="/Maintenance" className="hover:text-orange-500 transition-colors">MAINTENANCE</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/Profile">
                <div className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <User className="w-5 h-5" />
                  <span className="hidden sm:block text-sm">PROFILE</span>
                </div>
              </Link>
              <Link to="/Wishlist">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                </div>
                <span className="hidden sm:block text-sm">WISHLIST</span>
              </div></Link>
              <Link to="/Cart">
                <div className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <div className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                  </div>
                  <span className="hidden sm:block text-sm">CART</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-teal-600 py-4 flex justify-center">
        <div className="relative w-full max-w-3xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <div className="flex items-center pr-3 ">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <input
            type="text"
            placeholder="Search a Product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-4 py-2 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-md"
          />
        </div>
        <div className=' text-amber-300 ml-7'><img src="/public/whatsapp.png.png"></img></div>
      </div>

    </div>
  );
};

export default Navbar;
































