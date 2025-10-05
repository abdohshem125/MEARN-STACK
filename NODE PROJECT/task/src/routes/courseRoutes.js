const express = require("express");
const Course = require("../../models/courseModel");
// const validateCourse = require("../utils/courseValidation");

const router = express.Router();

// router.post("/", async (req, res) => {
//   const valid = validateCourse(req.body);
//   if (!valid) {
//     return res.status(400).json({ errors: validateCourse.errors });
//   }

//   try {
//     const course = new Course(req.body);
//     await course.save();
//     res.json(course);
//   } catch (err) {
//     res.json({ error: err.message });
//   }
// });

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find({})
      .populate("department")
      .populate("students");
    console.log("Courses Page", courses);

    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
