const router = require("express").Router();
const { Workout } = require("../models");
// const db = require("../models");

//get all workoutes for main page display
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

//get all workouts for dashboard display
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

//creates new workout; is empty 
router.post("/api/workouts", ({ body }, res) => {
  const workout = new Workout(body);

  Workout.create(workout)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//add exercise data to workout
router.put("/api/workouts/:id", (req, res) => {
  console.log("looking at put route in API",req.body);
  Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((Workout) => {
      console.log(Workout);
      res.json(Workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
