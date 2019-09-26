var express = require('express')
var router = express.Router()

//TEST
router.get("/", (req, res) => {
  res.send("Express server is up and running in Users.js.");
});

module.exports = router