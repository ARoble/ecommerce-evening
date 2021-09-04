const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
require("./server");
//Initalize express
const app = express();
app.use(bodyParser());
app.use(cors());
const productRouter = require("./Routes/productRoutes");
const userRouter = require("./Routes/userRoutes");

app.use("/api/product", productRouter);
app.use("/api/user", userRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
