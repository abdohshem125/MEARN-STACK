const express = require("express");
const Department = require("../../models/departmentModel");
const validateDepartment = require("../utils/departmentValidation");

const router = express.Router();

router.post("/", async (req, res) => {
  const valid = validateDepartment(req.body);
  if (!valid) {
    return res.status(400).json({ errors: validateDepartment.errors });
  }

  try {
    const department = new Department(req.body);
    await department.save();
    res.status(201).json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const departments = await Department.find()
      .populate("students")
      .populate("courses");
    res.json(departments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
