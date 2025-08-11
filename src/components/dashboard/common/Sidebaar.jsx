import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebaar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Users', path: '/admin/AllUsers' },
    { name: 'Products', path: '/admin/AdminProduct' },
    { name: 'Orders', path: '/admin/OrderPage' },
  { name: 'Settings', path: '/admin/Settings' }
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 p-5">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`block px-2 py-1 rounded hover:bg-gray-700 transition duration-300 ${
                location.pathname === item.path ? 'bg-gray-700' : ''
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebaar;
