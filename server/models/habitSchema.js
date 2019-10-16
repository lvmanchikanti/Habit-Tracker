var mongoose = require("mongoose");
Schema = mongoose.Schema;

var Habit = new Schema({
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
    sparse: true
  }
});

var Habit = mongoose.model("Habit", Habit);

module.exports = Habit;
