const express = require("express");
const productController = require("../Controller/productController");
const router = express.Router();

// @route GET api/product/
// @desc Find Products
// @access public

router
  .route("/")
  .get(productController.products)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .put(productController.editProduct)
  .delete(productController.deleteProduct);

module.exports = router;
