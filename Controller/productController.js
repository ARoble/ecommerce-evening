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
    req.body.image = req.file.filename;
    const { name, price, description } = req.body;
    if (name === "" || price === "" || description === "") {
      return res.status(400).json({
        message: "Please fill out all required fields",
      });
    }

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
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      message: "Found product",
      product,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
exports.editProduct = async (req, res) => {
  try {
    if (req.file !== undefined) {
      req.body.image = req.file.filename;
    }

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
