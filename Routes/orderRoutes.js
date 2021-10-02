const express = require("express");

const Router = express.Router();
const orderController = require("../Controller/orderController");
const verifyToken = require("../middleware/auth");

Router.route("/")
  .post(verifyToken, orderController.order)
  .get(verifyToken, orderController.getOrders);
Router.route("/:id").put(verifyToken, orderController.fullfilled);
module.exports = Router;
