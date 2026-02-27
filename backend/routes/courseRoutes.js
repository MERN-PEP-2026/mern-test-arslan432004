const express = require("express");
const {
  createCourse,
  getCourses,
  deleteCourse
} = require("../controllers/courseController");

const router = express.Router();

router.post("/", createCourse);
router.get("/", getCourses);
router.delete("/:id", deleteCourse);

module.exports = router;