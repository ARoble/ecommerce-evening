const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
require("./server");
const productRouter = require("./Routes/productRoutes");
const userRouter = require("./Routes/userRoutes");
const reviewRouter = require("./Routes/reviewRoutes");
const orderRouter = require("./Routes/orderRoutes");

//Initalize express
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static("images"));

app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/review", reviewRouter);
app.use("/api/order", orderRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
