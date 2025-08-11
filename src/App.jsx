import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './pages/footer';
import Sidebaar from './components/dashboard/common/Sidebaar';
import Product from './pages/products';
import Offers from './pages/offers';
import Camera from './pages/Camera';
import Villa from './pages/villa';
import Maintenance from './pages/maintenance';
import Registration from './pages/Register';
import Login from './pages/login';
import CartPage from './pages/Carts';
import Profile from './pages/Profile';
import Wishlist from './pages/wishlist';
import ForgotPassword from './pages/ForgotPassword';
import Admin from './components/dashboard/common/admin';
import AllUsers from './pages/dashboard/AllUsers';
import AdminProduct from './pages/dashboard/adminproduct';
import AddProduct from './pages/dashboard/AddProduct';
import UpdateProductForm from './pages/dashboard/update';
import OrderPage from './pages/dashboard/order';
import SettingsPage from './pages/dashboard/setting';


const NotFound = () => (
  <div style={{ padding: '40px', textAlign: 'center', color: 'red' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);


const MainFunction = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);


const AdminFunction = () => (
  <div className="admin-layout">
    <div className="flex">
      <Sidebaar />
      <div className="flex-1 ml-64 p-6">
        <Outlet />
      </div>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainFunction />,
    children: [
      { path: '', element: <Product /> },
      { path: 'Product', element: <Product /> },
      { path: 'Offers', element: <Offers /> },
      { path: 'Camera', element: <Camera /> },
      { path: 'Villa', element: <Villa /> },
      { path: 'Maintenance', element: <Maintenance /> },
      { path: 'Registration', element: <Registration /> },
      { path: 'Login', element: <Login /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'profile', element: <Profile /> },
      { path: 'Wishlist', element: <Wishlist /> },
         { path: 'ForgotPassword', element: <ForgotPassword /> },
      { path: '*', element: <NotFound /> }
    ]
  },
  {
    path: '/admin',
    element: <AdminFunction />,
    children: [
      { path: '', element: <Admin /> },
      { path: 'AllUsers', element: <AllUsers /> },
      { path: 'AdminProduct', element: <AdminProduct /> },
      { path: 'AdminProduct/add-new-product', element: <AddProduct /> },
      { path: 'AdminProduct/update-product/:id', element: <UpdateProductForm /> },
      { path: 'OrderPage', element: <OrderPage /> },
      { path: 'Settings', element: <SettingsPage /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
