//require dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.port || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));
app.use(require("./routes/apiRoutes"))
app.use(require("./routes/homeRoutes"))
//set up express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});


//route to get stats.html populated w/data
//move to api routes later
app.get("/stats", (req, res) => {
  try {
     db.Workout.find({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
    
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to post form submission to mongoDB via mongoose

//start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
