const express = require("express");

const Router = express.Router();
const orderController = require("../Controller/orderController");
Router.route("/").post(orderController.order);

module.exports = Router;
