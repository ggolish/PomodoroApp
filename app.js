
// Middleware imports
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

// Router imports
const tasks = require("./routes/task");
const users = require("./routes/user");

// Connect to mongo
mongoose.connect("mongodb://ggolish:ggolish@ds251799.mlab.com:51799/pomodoroapp");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(cors());

app.use("/tasks", tasks);
app.use("/users", users);

app.get("/", (req, res) => {
  res.send("PomodoroApp");
});

//app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, (err) => {
  if(err) throw err;
  console.log("PomodoroApp listening on port " + port);
});
