var express = require('express')
var router = express.Router()

//TEST
router.get("/", (req, res) => {
  res.send("Express server is up and running in Habits.js.");
});

module.exports = router