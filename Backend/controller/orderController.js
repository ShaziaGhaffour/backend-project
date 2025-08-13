// import Order from "../models/Order.js";
// // import sendMail from "../Utils/sendMail.js";
// export const createOrder = async (req, res) => {
//   try {
//     const { products } = req.body;

//     if (!products || products.length === 0) {
//       return res.status(400).json({ message: "No products to order" });
//     }
// if (!req.user) {
//   return res.status(401).json({ message: "User not authenticated" });
// }
//     const newOrder = new Order({
//       user: req.user.id, // verifyUser middleware se milta hai
//       products: products.map(p => ({
//         product: p.productId,
//         quantity: p.quantity
//       })),
//       status: "Pending",
//       createdAt: new Date()
//     });

//     await newOrder.save();

//     res.status(201).json({ message: "Order placed successfully", order: newOrder });
//   } catch (error) {
//     console.error("Create order error:", error);
//     res.status(500).json({ message: "Server error while placing order" });
//   }
// };


// export const getMyOrders = async (req, res) => {
//   try {
//     const { id } = req.user;
//     const orders = await Order.find({ user: id }).populate('product','title image category');

//     if (!orders || orders.length === 0) {
//       return res.status(404).json({ message: "No orders found for this user." });
//     }

//     return res.status(200).json({ orders });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };





import Order from "../models/Order.js";
export const createOrder = async (req, res) => {
  try {
    const { products } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ message: "No products to order" });
    }

    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    // Save order to DB directly
    const newOrder = new Order({
      user: req.user.id,
      products: products.map((p) => ({
        product: p.productId,
        quantity: p.quantity,
      })),
      status: "Pending",
      paymentStatus: "Unpaid", // since no payment
      createdAt: new Date(),
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ message: "Server error while placing order" });
  }
};
