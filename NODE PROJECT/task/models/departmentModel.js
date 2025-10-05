const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  building: String,
  students: [{ type: mongoose.Schema.ObjectId, ref: "Student" }], // students in dept
  courses: [{ type: mongoose.Schema.ObjectId, ref: "Course" }], // courses in dept
});

module.exports = mongoose.model("Department", departmentSchema);
