var mongoose = require("mongoose");
Schema = mongoose.Schema;

var UserSession = new Schema({
  userId: {
    type: Number,
    default: -1
  },
  timestamp: {
    type: Date,
    default: Date.now()
  }
});