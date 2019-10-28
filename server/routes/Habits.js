var express = require("express");
var router = express.Router();
var habit = require("../controllers/habitController.js");

//get all habits
// habits/
router.route("/").get(habit.getAllHabits);

//Create habit
// habits/create
router.route("/create").post(habit.create);

// habits/getMany
// need post so request body can be sent with the habit ids list
router.route("/getMany").post(habit.getManyHabits);

//Delete habit
// habits/delete/12345
router.route("/delete/:_id").delete(habit.deleteHabit);

// habits/12345
router
  .route("/:_id")
  .get(habit.getHabitById) //Get habit by id
  .put(habit.updateCollectionId); //Update collection id

module.exports = router;
