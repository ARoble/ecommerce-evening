const express = require("express");

const Router = express.Router();

const reviewController = require("../Controller/reviewController");

Router.route("/").post(reviewController.createReview);

Router.route("/all").get(reviewController.reviews);
module.exports = Router;
