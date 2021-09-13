const mongoose = require("mongoose");
const { order } = require("../Controller/orderController");

const orderSchema = mongoose.Schema({
  firstName: String,
  secondName: String,
  email: String,
  shipping: String,
  phone: Number,
  order: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      category: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      quanity: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  total: Number,
});

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;
