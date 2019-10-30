//server.js
require("dotenv").config();
const express = require("express");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
let app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../../../build")));

mongoose.connect(config.db.uri, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

//Routes
var users = require("../routes/Users.js");
app.use("/users", users);
var habits = require("../routes/Habits.js");
app.use("/habits", habits);
var collection = require("../routes/Collections.js");
app.use("/collections", collection);

//POST request to server
// app.post("/api", (req, res) => {
//   let user = new User(req.body);
//   user
//     .save()
//     .then(user => {
//       res.status(200).json({ user: "User added successfully" });
//     })
//     .catch(err => {
//       res.status(400).send("adding new user failed");
//     });
// });

// //DELETE request to server
// app.delete("/api", (req, res) => {});

// //PUT request to server
// app.put("/api", (req, res) => {});

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../../../build", "index.html"));
// });

app.listen(port, _ => console.log(`The server is listening on port ${port}`));
