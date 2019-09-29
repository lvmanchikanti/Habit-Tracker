var express = require("express");
var router = express.Router();

//TEST
router.get("/", (req, res) => {
  res.send("Express server is up and running in Collections.js.");
});

//GET to return all the habits associated + members added
router.get("/collectionId", (req, res) => {});

module.exports = router;
