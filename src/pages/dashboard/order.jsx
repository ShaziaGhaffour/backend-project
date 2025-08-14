import React, { useEffect, useState } from "react";
import API from '../../api.js';  // yahan se axios instance import ho raha hai

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get("/api/orders"); // API instance use karo

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
        <div
          key={order._id || Math.random()}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <p><strong>Order ID:</strong> {order._id || "N/A"}</p>
          <p><strong>User:</strong> {order.user?.name || "Unknown"}</p>
          <p><strong>Total:</strong> {order.total ?? "N/A"}</p>

          <h4>Products:</h4>
          <ul>
            {Array.isArray(order.products) && order.products.length > 0 ? (
              order.products.map((product) => (
                <li key={product._id || Math.random()}>
                  {product.name} - {product.quantity}
                </li>
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
