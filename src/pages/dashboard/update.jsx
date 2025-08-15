// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const UpdateProductForm = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState({
//     title: '',
//     description: '',
//     image: '',
//     price: ''
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:2000/api/products/get-product/${id}`);
//         if (res.data?.product) {
//           setProduct(res.data.product);
//         } else {
//           toast.error("No product found");
//         }
//       }  finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`http://localhost:2000/api/products/update-product/${id}`, product);
//       toast.success("Product updated successfully");
//       navigate('/admin/AdminProduct');
//     } catch (error) {
//       console.error("Update failed:", error);
//       toast.error("Update failed");
//     }
//   };

//   if (loading) {
//     return <div className="text-center mt-10 text-lg">Loading product...</div>;
//   }

//   return (
//     <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">Update Product</h2>
//       <div className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="title"
//           value={product.title}
//           onChange={handleChange}
//           className="border px-3 py-2 rounded"
//           placeholder="Title"
//         />
//         <input
//           type="text"
//           name="description"
//           value={product.description}
//           onChange={handleChange}
//           className="border px-3 py-2 rounded"
//           placeholder="Description"
//         />
//         <input
//           type="text"
//           name="image"
//           value={product.image}
//           onChange={handleChange}
//           className="border px-3 py-2 rounded"
//           placeholder="Image URL"
//         />
//         <input
//           type="number"
//           name="price"
//           value={product.price}
//           onChange={handleChange}
//           className="border px-3 py-2 rounded"
//           placeholder="Price"
//         />
//         <button
//           onClick={handleUpdate}
//           className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Update Product
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UpdateProductForm;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../../api.js'; // ✅ Centralized API instance

const UpdateProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: '',
    description: '',
    image: '',
    price: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/api/products/get-product/${id}`); // ✅ Short endpoint
        if (res.data?.product) {
          setProduct(res.data.product);
        } else {
          toast.error("No product found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    try {
      await API.put(`/api/products/update-product/${id}`, product); // ✅ Short endpoint
      toast.success("Product updated successfully");
      navigate('/admin/AdminProduct');
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Update failed");
    }
  };

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading product...</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Update Product</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          placeholder="Title"
        />
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          placeholder="Description"
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          placeholder="Image URL"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          placeholder="Price"
        />
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProductForm;
