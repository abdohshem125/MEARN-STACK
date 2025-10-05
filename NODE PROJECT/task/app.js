const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const courseRoutes = require("./src/routes/courseRoutes");
const studentRoutes = require("./src/routes/studentRoutes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/courses", courseRoutes);
app.use((req, res) => {
  console.log(req.params);
  res.send("not found");
});
app.use("/api/students", studentRoutes);
app.use((req, res) => {
  console.log(req.params);
  res.send("not found");
});



// app.use("/api/student", courseRoutes);
// app.use((req, res) => {
//   console.log(req.params);
//   res.send("not found");
// });
// app.use("/api/dept", courseRoutes);
// app.use((req, res) => {
//   console.log(req.params);
//   res.send("not found");
// });


module.exports = app;