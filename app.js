
// Middleware imports
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

// Router imports
const tasks = require("./routes/task");

// Connect to mongo
mongoose.connect("mongodb://localhost/pomodoroApp");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

app.use("/tasks", tasks);

app.get("/", (req, res) => {
  res.send("PomodoroApp");
});

app.listen(port, () => {
  console.log("PomodoroApp listening on port " + port);
});
