var express = require('express')
var router = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

let User = require("../models/UserSchema.js");
router.use(cors());

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

//Create user
router.post('/register', (req, res) => {
    let userData = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }

    //Check fields
    if(!userData.name) {
        return res.status(400).json({message: "Name field cannot be blank"});
    }
    if(!userData.username) {
        return res.status(400).json({message: "Username field cannot be blank"});
    }
    if(!userData.email) {
        return res.status(400).json({message: "Email field cannot be blank"});
    }
    if(!userData.password) {
        return res.status(400).json({message: "Password field cannot be blank"});
    }
  
    User.findOne({
      email: req.body.email
    })
      .then(user => {
        if (!user) { //User not found
          bcrypt.hash(req.body.password, 8, (err, hashed) => {
            userData.password = hashed
            User.create(userData)
              .then(user => {
                res.status(200).json({ status: user.email + ' account registered!' })
              })
              .catch(err => {
                res.status(400).json({error: err})
              })
          })
        } 
        else { //User found
          res.status(200).json({ error: 'User already exists' })
        }
      })
      .catch(err => {
        res.status(400).json({error: err})
      })
})
  
//Login user
router.post('/login', (req, res) => {
    User.find({
      email: req.body.email
    })
      .then(user => {
        if (user) { //User exists
          if (bcrypt.compareSync(req.body.password, user.password)) {
            // Passwords match
            const payload = {
              _id: user._id,
              name: user.name,
              email: user.email
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.send(token)
          } else {
            // Passwords don't match
            res.status(400).json({ error: 'User does not exist' })
          }
        } else {
          res.status(400).json({ error: 'User does not exist' })
        }
      })
      .catch(err => {
        res.status(400).send('error: ' + err)
      })
})

//View profile
// router.get('/profile', (req, res) => {
//     var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
//     User.findOne({
//       _id: decoded._id
//     })
//       .then(user => {
//         if (user) {
//           res.json(user)
//         } else {
//           res.send('User does not exist')
//         }
//       })
//       .catch(err => {
//         res.send('error: ' + err)
//       })
// })

module.exports = router