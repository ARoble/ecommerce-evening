const express = require("express");
const productController = require("../Controller/productController");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router
  .route("/")
  .get(productController.products)
  .post(upload.single("image"), productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .put(productController.editProduct)
  .delete(productController.deleteProduct);

module.exports = router;
