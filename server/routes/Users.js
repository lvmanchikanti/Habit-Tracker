var express = require('express')
var router = express.Router()

let User = require("../models/UserSchema.js");

//TEST
router.get("/api", (req, res) => {
  res.send("Express server is up and running.");
});

//Get all users
router.get("/", (req, res) => {
  User.find(function(err, user) {
    if (err) {
      console.log(err);
    } else {
      res.json(user);
    }
  });
});

//Create user account
router.post('/register', (req, res) => {
  let { body } = req;
  let { password } = body;
  let { email } = body;
  let { name } = body;
  let { username } = body;
  
  //Checks request body fields
  if (!name) {
      return res.send({
          success: false,
          message: 'Error: Name cannot be blank.'
      });
  }
  if (!username) {
      return res.send({
          success: false,
          message: 'Error: Username cannot be blank.'
      });
  }
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }
  email = email.toLowerCase();

  //Check if email already exists
  User.find({
    email: email
  }, (err, previousUsers) => {
    if (err) {
      return res.send({
        success: false,
        message: "server error"
      });
    } else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exist.'
      });
    }
  
    // Save the new user
    const newUser = new User();
    newUser.name = name;
    newUser.username = username;
    newUser.email = email;
    newUser.password = newUser.generateHash(password);
    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          newUser: newUser,
          message: err
        });
      }
      return res.send({
        success: true,
        message: newUser
      });
    });
  });
});

module.exports = router