var mongoose = require("mongoose");
Schema = mongoose.Schema;
collectionController = require("../controllers/collectionController.js");

var habitSchema = new Schema({
  id: {
    type: String,
    require: true,
    unique: true,
    sparse: true
  },
  habitName: {
    type: String,
    require: true,
    sparse: true
  },
  collectionId: {
    type: String,
    sparse: true,
    unique: false
  }
});

/*
Mongoose post middleware
need to call before compiling the model
https://mongoosejs.com/docs/middleware.html#defining
*/
//after you create a habit, need to add it to the group's habit id array
habitSchema.post("save", function(habitCreated) {
  console.log("post middleware check");
  console.log("habit created is: ", habitCreated);

  collectionController.addHabitToGroup(
    habitCreated._id,
    habitCreated.collectionId
  );
});

var Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
