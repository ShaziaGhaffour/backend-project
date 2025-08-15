// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import API from "../../api.js"

// const AddProduct = () => {
//     const [formData, setFormData] = useState({ title: '', price: '', image: '', description: '' });
//     const navigate = useNavigate();
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const hanldeSubmit = async(e)=>{
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:2000/api/products/add-product", formData, {
//   withCredentials: true,
// });
//             toast(response?.data?.message);
//             navigate(-1)
//         } catch (error) {
//             console.log(error)
//         }
//     }


//     return (
//         <div className="flex justify-center items-center min-h-screen bg-yellow-50 px-4">
//             <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
//                 <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Add Product</h1>
//                 <form className="space-y-4">
//                     <div>
//                         <label htmlFor="productName" className="block font-medium text-gray-700 mb-1">Product Name</label>
//                         <input
//                             type="text"
//                             id="productName"
//                             name='title'
//                             onChange={handleChange}
//                             value={formData.title}
//                             placeholder="Enter product name"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="price" className="block font-medium text-gray-700 mb-1">Price</label>
//                         <input
//                             type="text"
//                             id="price"
//                             name='price'
//                             value={formData.price}
//                             onChange={handleChange}
//                             placeholder="Enter product price"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="imageUrl" className="block font-medium text-gray-700 mb-1">Image URL</label>
//                         <input
//                             type="text"
//                             id="imageUrl"
//                             name='image'
//                             value={formData.image}
//                             onChange={handleChange}
//                             placeholder="Paste image URL"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="description" className="block font-medium text-gray-700 mb-1">Description</label>
//                         <textarea
//                             id="description"
//                             onChange={handleChange}
//                             name='description'
//                             value={formData.description}
//                             placeholder="Enter product description"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-y"
//                             rows="4"
//                         ></textarea>
//                     </div>

//                     <button
//                         type="submit"
//                         onClick={hanldeSubmit}
//                         className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
//                     >
//                         Add Product
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddProduct;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../../api.js';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        image: '',
        description: ''
    });

    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.title || !formData.price || !formData.image || !formData.description) {
            toast.error("Please fill all fields");
            return;
        }

        try {
            const response = await API.post(
                '/api/products/add-product',
                formData,
                { withCredentials: true }
            );

            toast.success(response?.data?.message || "Product added successfully");
            navigate(-1); // Go back
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || "Failed to add product");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-yellow-50 px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Add Product
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name="title"
                            onChange={handleChange}
                            value={formData.title}
                            placeholder="Enter product name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter product price"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Paste image URL"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter product description"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-y"
                            rows="4"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
