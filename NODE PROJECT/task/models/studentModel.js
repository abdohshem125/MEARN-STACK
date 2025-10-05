const mongoose = require("mongoose");
const { object } = require("webidl-conversions");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  dept_id: { type: Number, ref: "Department" }, // student in dept
  courses: [{ type: mongoose.Schema.ObjectId, ref: "Course" }], // student courses
});

module.exports = mongoose.model("Student", studentSchema);
