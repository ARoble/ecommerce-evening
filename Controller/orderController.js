const Order = require("../Model/orderModel");

exports.order = async (req, res) => {
  try {
    await Order.create(req.body);
    res.status(201).json({ message: "Order created" });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json({ orders });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
exports.fullfilled = async (req, res) => {
  try {
    await Order.findByIdAndUpdate(req.params.id, { fullfilled: true });
    res.status(200).json({ message: "success" });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
