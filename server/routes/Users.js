var express = require('express')
var router = express.Router()
const cors = require('cors')
var user = require("../controllers/userController.js")

router.use(cors());

//Create user
router.route("/register").post(user.create);
  
//Login user
router.route("/login").post(user.loginUser);

//Get all users
router.route("/").get(user.listAll);

//Get user by id
router.route("/:_id")
    .get(user.getUserById)
    .put(user.updateCollection);


//TODO: later when front end is set up
//View profile - admin
//router.route("/myprofile").get(user.getMyProfile);

module.exports = router