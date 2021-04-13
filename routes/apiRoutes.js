const router = require("express").Router();
const db = require("../models");

//get all workoutes for main page display
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

//get all workouts for dashboard display
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

//create new workout; route is buggy; new workouts don't have stats
router.post("/api/workouts", (req, res) => {
//   console.log(req.body);
  db.Workout.create({})
    .then((newExercise) => {
      res.json(newExercise);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//add workout session; 
router.put("/api/workouts/:id", (req, res) => {
  console.log(req.params.id);

});

module.exports = router;
