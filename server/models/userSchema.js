var mongoose = require("mongoose");
Schema = mongoose.Schema;

var User = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

var User = mongoose.model("User", userSchema);

module.exports = User;
