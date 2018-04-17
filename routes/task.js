const express = require("express");
const router = express.Router();

const Task = require("../models/task");

// Add a new task to the database
router.post("/add", (req, res) => {
  console.log("Adding a task!")
  Task.addTask(req.body.name, req.body.description, (err) => {
    if(err) throw err;
    res.json({success: true});
  });
});

// Get all tasks in the database
router.get("/get", (req, res) => {
  Task.getTasks((err, tasks) => {
    if(err) throw err;
    res.json(tasks);
  });
});

// Increment the pomodoro count of a task
router.post("/inc", (req, res) => {
  Task.incrementPomodoros(req.body.id, (err) => {
    if(err) throw err;
    res.json({success: true});
  });
});

// Remove a task
router.post("/remove", (req, res) => {
  Task.removeTask(req.body.id, (err) => {
    if(err) throw err;
    res.json({success: true});
  });
});

module.exports = router;
