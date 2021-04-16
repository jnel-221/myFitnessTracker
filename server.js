//require dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();
const PORT = process.env.port || 3030;

const app = express();

app.use(logger("dev"));

//set up express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//set up db & mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//pull in routing
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/homeRoutes"));

//start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
