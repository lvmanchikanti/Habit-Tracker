var mongoose = require("mongoose");
var bcrypt = require('bcrypt');

var User = new mongoose.Schema({
  id: {
    type: String,
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

User.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

var User = mongoose.model("UserSchema", User);

module.exports = User;
