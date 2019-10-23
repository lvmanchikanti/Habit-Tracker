var express = require("express"),
  mongoose = require("mongoose"),
  Habit = require("../models/habitSchema.js");

//POST - create habit
exports.create = function(req, res) {
  console.log(req.body);
  //TODO refactor to use ES6 destructuring syntax

  let habitData = {
    habitName: req.body.habitName,
    collectionId: req.body.habitGroupID
  };

  //Check fields
  if (!habitData.habitName) {
    return res
      .status(400)
      .json({ message: "Habit Name field cannot be blank" });
  }

  //Save habit
  Habit.create(habitData)
    .then(habit => {
      res.status(200).json({ habit: habit });
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};

//GET - Get habit by id
exports.getHabitById = function(req, res) {
  var habitId = req.params._id;

  Habit.findById(habitId, function(err, habit) {
    if (err) {
      res.status(400).json({ error: "Habit not found" });
    } else {
      res.status(200).json({ habit: habit });
    }
  });
};

//PUT - Update collection id of habit
exports.updateCollectionId = function(req, res) {
  let body = {
    collectionId: req.body.collectionId
  };
  Habit.findByIdAndUpdate(req.params._id, { collectionId: body.collectionId })
    .then(habit => {
      if (!habit) {
        return res.status(400).json("error");
      }
      res.status(200).json({ habit: habit });
    })
    .catch(err => {
      res.status(400).send("error: " + err);
    });
};

// NOTE: might not need later
exports.getAllHabits = function(req, res) {
  Habit.find({}, function(err, data) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(data);
    }
  });
};
