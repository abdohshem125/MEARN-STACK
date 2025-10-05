let app = require("./app");
require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");

const studentRoutes = require("./src/routes/studentRoutes");
// console.log("MONGO_URI =", process.env.MONGO);

let PORT = 3000;

mongoose
  .connect(process.env.MONGO)
  .then((conn) => {
    console.log(conn.connection);

    console.log("connected db");

    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
