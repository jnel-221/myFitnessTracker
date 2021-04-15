//require dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.port || 3030;

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
  useNewUrlParser: true,
  useFindAndModify: false
});

//start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
