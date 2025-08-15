// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate ,Link} from 'react-router-dom';
// import { toast } from 'react-toastify';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:2000/api/users/login", { email, password }, { withCredentials: true })
//       toast(response?.data?.message);
//       navigate("/login")

//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="max-w-md w-full">
//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">LOGIN</h1>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-8">
//           <div className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter Your Password"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50"
//               />
//             </div>

//             <button
//               onClick={handleSubmit}
//               className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 font-medium transition-colors"
//               disabled={loading}
//             >
//               {loading ? 'Logging in...' : 'LOG IN'}
//             </button>

//             <div className="text-center">
//   <Link to="/ForgotPassword" className="text-sm text-teal-600 hover:text-teal-800 transition-colors">
//     Forgot Your Password?
//   </Link>
// </div>
//           </div>

//           <div className="mt-8 pt-6 border-t border-gray-200">
//             <p className="text-xs text-gray-500 leading-relaxed">
//               By Signing in or Free Account for the Genius Registration...
//             </p>
//           </div>

         
// <div className="mt-4 text-center">
//   <span className="text-sm text-gray-600">Register: </span>
//   <Link to="/Registration" className="text-sm text-teal-600 hover:text-teal-800 font-medium">
//     Click Here Now
//   </Link>
// </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../api.js'; // ✅ Centralized Axios instance import

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // ✅ API call
      const response = await API.post(
        "/api/users/login",
        { email, password },
        { withCredentials: true }
      );

      // ✅ Token storage
      if (response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!");
        navigate("/"); // Home or dashboard page
      } else {
        toast.error("Token not found in response");
      }

    } catch (error) {
      console.error("Login error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">LOGIN</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 font-medium transition-colors"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'LOG IN'}
            </button>

            <div className="text-center">
              <Link to="/ForgotPassword" className="text-sm text-teal-600 hover:text-teal-800 transition-colors">
                Forgot Your Password?
              </Link>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 leading-relaxed">
              By Signing in or Free Account for the Genius Registration...
            </p>
          </div>

          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">Register: </span>
            <Link to="/Registration" className="text-sm text-teal-600 hover:text-teal-800 font-medium">
              Click Here Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
