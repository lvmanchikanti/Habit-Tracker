var express = require("express"),
  mongoose = require("mongoose"),
  Habit = require("../models/habitSchema.js");

//POST - create habit
exports.create = function(req, res) {
    let habitData = {
        habitName: req.body.habitName
    }
  
    //Check fields
    if(!habitData.habitName) {
        return res.status(400).json({message: "Habit Name field cannot be blank"});
    }

    //Save habit
    Habit.create(habitData)
    .then(habit => {
        res.status(200).json({habit: habit})
    })
    .catch(err => {
        res.status(400).json({error: err})
    });
};

//Get habit by id

//Update collection id of habit