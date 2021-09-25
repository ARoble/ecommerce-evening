const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  title: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  review: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, //612d078f8bd1e977fe715b68
    ref: "user",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

const reviewModel = mongoose.model("review", reviewSchema);

module.exports = reviewModel;
