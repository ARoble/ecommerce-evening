const Product = require("./../Model/productModel");

exports.products = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      message: "All products",
      data: products,
    });
  } catch (e) {
    res.status(400).json({
      message: "Error",
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.status(201).json({
      message: "created product",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });

    res.status(200).json({
      message: "Found product",
      data: product,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
exports.editProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "edited product",
    });
  } catch (e) {
    res.status(400).josn({
      messgae: e,
    });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "deleted product",
    });
  } catch (e) {
    res.status(400).json({
      message: e,
    });
  }
};
