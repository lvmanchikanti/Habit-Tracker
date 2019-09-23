var mongoose = require("mongoose");
Schema = mongoose.Schema;

var Habit = new Schema({
  habitId: {
    type: String,
    require: true,
    unique: true
  },
  name: {
    type: String,
    require: true
  },
  collectionId: {
    type: String,
    require: true,
    unique: true
  }
});

var Habit = mongoose.model("Habit", Habit);

module.exports = Habit;
