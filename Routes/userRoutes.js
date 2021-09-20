const express = require("express");
const userController = require("./../Controller/userController");

const Router = express.Router();

Router.route("/").post(userController.saveUser);

Router.route("/signUp").post(userController.loginUser);

module.exports = Router;
