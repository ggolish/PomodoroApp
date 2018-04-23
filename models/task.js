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
  pomodoros: [{
    amount: {
      type: Number,
      default: 1
    },
    length: {
      type: Number,
      default: 25
    },
    date: {
      type: Date,
      default: new Date
    }
  }],
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

module.exports.getActiveTasks = function(userid, callback) {
  Task.find({userid: userid, active: true}, callback);
}

module.exports.getArchivedTasks = function(userid, callback) {
  Task.find({userid: userid, active: false}, callback);
}

module.exports.getAllTasks = function(userid, callback) {
  Task.find({userid: userid}, callback);
}

module.exports.updateTask = function(id, amount, length, callback) {
  Task.update({_id: id}, {$push: {pomodoros: {amount: amount, length: length}}, $inc: {total: amount}}, callback);
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
