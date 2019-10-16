var express = require('express')
var router = express.Router()
var habit = require("../controllers/habitController.js")

//Create habit
router.route("/create").post(habit.create);

router.route("/:_id")
    .get(habit.getHabitById) //Get habit by id
    .put(habit.updateCollectionId) //Update collection id

module.exports = router