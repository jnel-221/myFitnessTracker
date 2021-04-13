const router = require("express").Router();
const path = require("path");

//route for exercise
router.get("/exercise", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
);
//route for stats
router.get("/stats", (req, res) => 
res.sendFile(path.join(__dirname, "../public/stats.html")));
//route for index

module.exports = router;
