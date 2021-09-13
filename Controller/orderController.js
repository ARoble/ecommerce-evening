const Order = require("../Model/orderModel");

exports.order = async (req, res) => {
  try {
    await Order.create(req.body);
    res.status(201).json({ message: "Order created" });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
