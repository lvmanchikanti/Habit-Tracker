var express = require("express"),
  mongoose = require("mongoose"),
  Collection = require("../models/collectionSchema.js");

//POST
exports.create = function(req, res) {
  var collection = Collection(req.body);
  console.log(JSON.stringify(req.body));

  collection.save(function(err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(collection);
    }
  });
};

//GET all collections
exports.listAll = function(req, res) {
  Collection.find({}, function(err, data) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(data);
    }
  });
};

//GET specific collection, return habit objects of this specific collection
exports.read = function(req, res) {
  var id = req.params._id;

  Collection.findById(id, function(err, data) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(data);
    }
  });
};

// psuh a new habit id in a groups habit id array
// called from habitSchema in the mongoose post middleware
exports.addHabitToGroup = function(habitId, collectionId) {
  Collection.findOneAndUpdate(
    { _id: collectionId },
    { $push: { habitIds: habitId } },
    function(error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("success: ", success);
      }
    }
  );
};

// ES6 syntax
exports.deleteHabit = (req, res) => {
  console.log("delete request body: ", req.body);
  let habitId = req.body.habitId;
  let collectionId = req.body.groupId;

  console.log("delete habit collection control: ", habitId, " ", collectionId);
  Collection.findOneAndUpdate(
    { _id: collectionId },
    { $pull: { habitIds: habitId } },
    (error, success) => {
      if (error) {
        console.log(error);
        res.status(400).json(error);
      } else {
        console.log("success: ", success);
        res.status(200).json(success);
      }
    }
  );
};
