const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config;
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
const routes = require("./routes/todoRoute");

mongoose
  .connect("mongodb://localhost:27017/todo")
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => {
  console.log(`server running at PORT ${PORT} `);
});
