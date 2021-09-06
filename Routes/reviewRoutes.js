const express = require("express");

const Router = express.Router();
const mongoose = require("mongoose");
const Review = require("../Model/reviewModel");

Router.route("/")
  .post(async (req, res) => {
    //code
    try {
      await Review.create(req.body);
      res.status(200).json({ message: "created" });
    } catch (e) {
      res.status(400).json({
        message: "hi",
      });
    }
  })
  .get(async (req, res) => {
    const reviews = await Review.find({}).populate("user");
    res.status(200).json({ reviews });
  });

module.exports = Router;
