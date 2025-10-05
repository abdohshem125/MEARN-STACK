const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  credits: Number,
  dept_id: { type: mongoose.Schema.ObjectId, ref: "Department" }, // course belongs to dept
  students: [{ type: mongoose.Schema.ObjectId, ref: "Student" }], // enrolled students
});

module.exports = mongoose.model("Course", courseSchema);
