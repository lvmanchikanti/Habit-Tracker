//server.js
require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
let app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../../../build")));

mongoose.connect(config.db.uri, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.get("/", (req, res) => {
  res.send("Express server is up and running.");
});

//GET request to server
app.get("/api", (req, res) => {});

//POST request to server
app.post("/api", (req, res) => {});

//DELETE request to server
app.delete("/api", (req, res) => {});

//PUT request to server
app.put("/api", (req, res) => {});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../../build", "index.html"));
});

app.listen(port, _ => console.log(`The server is listening on port ${port}`));
