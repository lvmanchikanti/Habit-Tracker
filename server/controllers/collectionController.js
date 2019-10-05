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
