import React, { useEffect, useState } from "react";
import API from '../../api.js';  

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token"); // token get from storage
        const res = await API.get("/api/orders", {
          headers: {
            Authorization: `Bearer ${token}` // send token
          }
        });

        const fetchedOrders = Array.isArray(res.data) ? res.data : [];
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching orders", error);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (!orders.length) return <p>No orders found</p>;

  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order) => (
        <div key={order._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>User:</strong> {order.user?.name || "Unknown"}</p>
          <p><strong>Total:</strong> {order.total}</p>
          <h4>Products:</h4>
          <ul>
            {order.products?.length ? (
              order.products.map((product) => (
                <li key={product._id}>{product.name} - {product.quantity}</li>
              ))
            ) : (
              <li>No products</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
