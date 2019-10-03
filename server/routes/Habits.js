var express = require('express')
var router = express.Router()
var habit = require("../controllers/habitController.js")

//Create habit
router.route("/create").post(habit.create);

module.exports = router