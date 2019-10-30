var express = require("express");
var router = express.Router();
var habit = require("../controllers/habitController.js");

//get all habits
<<<<<<< HEAD
router.route("/").get(habit.getAllHabits);

//Create habit
router.route("/create").post(habit.create);

=======
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
>>>>>>> 4e4a6c2404f40c2609ef9fec5c036df9d6a52514
router
  .route("/:_id")
  .get(habit.getHabitById) //Get habit by id
  .put(habit.updateCollectionId); //Update collection id

module.exports = router;
