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
  console.log("req body is: ", req.body);
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

//deleting the entire group or collection
exports.deleteCollection = (req, res) => {
  console.log("delete req body: ", req.body);
  let collectionId = req.params._id;

  console.log("delete collection: ", collectionId);
  Collection.findByIdAndDelete(
    { _id: collectionId },
    //pull collectionId from collections in user schema!
    { $pull: { collection: collectionId } },
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

//edit groups by changing the name or adding more members
exports.editCollection = (req, res) => {
  console.log("editing req body: ", req.body);

  let name = req.body.name;
  let userId = req.body.userId;
  let collectionId = req.params._id;

  Collection.findOneAndUpdate(
    { _id: collectionId },
    name,
    { $push: { userIds: userId } },
    function(error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("success: ", success);
      }
    }
  );
};
