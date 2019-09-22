var mongoose = require("mongoose");
Schema = mongoose.Schema;

var User = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
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
  },
  collections: [
    {
      type: String
    }
  ]
});

var User = mongoose.model("User", userSchema);

module.exports = User;
