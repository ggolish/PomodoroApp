const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: "No description."
  },
  total: {
    type: Number,
    default: 0
  },
  pomodoros: {
    type: [{
      amount: {
        type: Number,
        default: 0
      },
      length: {
        type: Number,
        default: 0
      },
      date: {
        type: Date,
        default: new Date
      }
    }],
    default: {}
  },
  active: {
    type: Boolean,
    default: true
  },
  userid: {
    type: String,
    required: true
  }
});

const Task = module.exports = mongoose.model("Task", taskSchema);

module.exports.addTask = function(name, description, userid, callback) {
  let newTask = new Task({
    name: name,
    description: description,
    userid: userid
  });
  newTask.save(callback);
}

module.exports.getTasksByStatus = function(userid, active, callback) {
  Task.aggregate([
    {
      $match: {
        userid: userid,
        active: active
      }
    },
    {
      $project: {
        _id: "$_id",
        description: "$description",
        total: "$total",
        active: "$active",
        name: "$name",
        userid: "$userid",
        pomodoros: "$pomodoros",
        sortPomodoro: {
          $arrayElemAt: ["$pomodoros", -1]
        }
      }
    },
    {
      $project: {
        _id: "$_id",
        description: "$description",
        total: "$total",
        active: "$active",
        name: "$name",
        userid: "$userid",
        pomodoros: "$pomodoros",
        sortDate: "$sortPomodoro.date"
      }
    },
    {
      $sort: {
        "sortDate": -1
      }
    },
    {
      $project: {
        _id: "$_id",
        description: "$description",
        total: "$total",
        active: "$active",
        name: "$name",
        userid: "$userid",
        pomodoros: "$pomodoros"
      }
    }
  ], callback);
}

module.exports.getAllTasks = function(userid, callback) {
  Task.find({userid: userid}, callback);
}

module.exports.updateTask = function(id, amount, length, callback) {
  Task.update({_id: id}, {$push: {pomodoros: {amount: amount, length: length}}, $inc: {total: amount}}, callback);
}

module.exports.editTask = function(id, name, description, callback) {
  Task.update({_id: id}, {$set: {name: name, description: description}}, callback);
}

module.exports.removeTask = function(id, callback) {
  Task.remove({_id: id}, callback);
}

module.exports.archiveTask = function(id, callback) {
  Task.update({_id: id}, {$set: {active: false}}, callback);
}

module.exports.activateTask = function(id, callback) {
  Task.update({_id: id}, {$set: {active: true}}, callback);
}
