const express = require("express");
const router = express.Router();
const jwt = require("express-jwt");

const Task = require("../models/task");

// Add a new task to the database
router.post("/add", jwt({secret: "secret"}), (req, res) => {
  Task.addTask(req.body.name, req.body.description, req.body.userid, (err) => {
    if(err) res.json({success: false});
    res.json({success: true});
  });
});

// Get all tasks in the database that are active
router.get("/get-active", jwt({secret: "secret"}), (req, res) => {
  Task.getTasksByStatus(req.query.userid, true, (err, tasks) => {
    if(err) res.json({success: false});
    res.json(tasks);
  });
});

// Get all tasks in the database that are archived
router.get("/get-archived", jwt({secret: "secret"}), (req, res) => {
  Task.getTasksByStatus(req.query.userid, false, (err, tasks) => {
    if(err) res.json({success: false});
    res.json(tasks);
  });
});

// Get all tasks in database
router.get("/get-all", jwt({secret: "secret"}), (req, res) => {
  Task.getAllTasks(req.query.userid, (err, tasks) => {
    if(err) res.json({success: false});
    res.json(tasks);
  });
});

// Edit a task
router.post("/edit", jwt({secret: "secret"}), (req, res) => {
  Task.editTask(req.body.id, req.body.name, req.body.description, (err) => {
    if(err) res.json({success: false});
    else res.json({success: true});
  });
});

// Increment the pomodoro count of a task
router.post("/update", jwt({secret: "secret"}), (req, res) => {
  Task.updateTask(req.body.id, req.body.amount, req.body.length, (err) => {
    if(err) res.json({success: false});
    res.json({success: true});
  });
});

// Remove a task
router.post("/remove", jwt({secret: "secret"}), (req, res) => {
  Task.removeTask(req.body.id, (err) => {
    if(err) res.json({success: false});
    res.json({success: true});
  });
});

// Archive a task
router.post("/archive", jwt({secret: "secret"}), (req, res) => {
  Task.archiveTask(req.body.id, (err) => {
    if(err) res.json({success: false});
    res.json({success: true});
  });
});

// Activate a task
router.post("/activate", jwt({secret: "secret"}), (req, res) => {
  Task.activateTask(req.body.id, (err) => {
    if(err) res.json({success: false});
    res.json({success: true});
  });
});

module.exports = router;
