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
  pomodoros: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Task = module.exports = mongoose.model("Task", taskSchema);

module.exports.addTask = function(name, description, callback) {
  let newTask = new Task({
    name: name,
    description: description
  });
  newTask.save(callback);
}

module.exports.getTasks = function(callback) {
  Task.find({}, callback);
}

module.exports.incrementPomodoros = function(id, callback) {
  Task.update({_id: id}, {$inc: {pomodoros: 1}}, callback);
}

module.exports.removeTask = function(id, callback) {
  Task.remove({_id: id}, callback);
}
