const express = require("express");
const port = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MOGO_URL);
const app = express();

app.listen(port, (err) => {
  if (err) {
    console.log("error while establish the server");
  }

  console.log(`Server Running on PORT ${port} `);
});
