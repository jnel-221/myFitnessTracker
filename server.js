//require dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.port || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

//set up express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

// HTML routes

//route to get index.html

//route to get exercise.html

//API routes

//route to post form submission to mongoDB via mongoose

//route to get stats.html populated w/data

//start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
