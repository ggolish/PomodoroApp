const express = require("express");
const router = express.Router();

const Task = require("../models/task");

// Add a new task to the database
router.post("/add", (req, res) => {
  Task.addTask(req.body.name, req.body.description, req.body.userid, (err) => {
    if(err) res.json({success: false});
    res.json({success: true});
  });
});

// Get all tasks in the database that are active
router.get("/get-active", (req, res) => {
  Task.getActiveTasks(req.query.userid, (err, tasks) => {
    if(err) res.json({success: false});
    res.json(tasks);
  });
});

// Get all tasks in the database that are archived
router.get("/get-archived", (req, res) => {
  Task.getArchivedTasks(req.query.userid, (err, tasks) => {
    if(err) res.json({success: false});
    res.json(tasks);
  });
});

// Increment the pomodoro count of a task
router.post("/update", (req, res) => {
  Task.updateTask(req.body.id, req.body.amount, req.body.length, (err) => {
    if(err) res.json({success: false});
    res.json({success: true});
  });
});

// Remove a task
router.post("/remove", (req, res) => {
  Task.removeTask(req.body.id, (err) => {
    if(err) res.json({success: false});
    res.json({success: true});
  });
});

// Archive a task
router.post("/archive", (req, res) => {
  Task.archiveTask(req.body.id, (err) => {
    if(err) res.json({success: false});
    res.json({success: true});
  });
});

// Activate a task
router.post("/activate", (req, res) => {
  Task.activateTask(req.body.id, (err) => {
    if(err) res.json({success: false});
    res.json({success: true});
  });
});

module.exports = router;
