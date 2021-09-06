const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  message: {
    type: String,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const reviewModel = mongoose.model("review", reviewSchema);

module.exports = reviewModel;
