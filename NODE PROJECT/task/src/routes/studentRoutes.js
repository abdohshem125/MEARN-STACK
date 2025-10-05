const express = require("express");
const studentModel = require("../../models/studentModel");
const validateStudent = require("../utils/studentValidation");

const router = express.Router();

router.post("/", async (req, res) => {
  const valid = validateStudent(req.body);
  if (!valid) {
    return res.status(400).json({ errors: validateStudent.errors });
  }

  try {
    const student = new studentModel(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/allStudent", async (req, res) => {
  try {
    const students = await studentModel
      .find()
      .populate("department")
      .populate("courses");
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
