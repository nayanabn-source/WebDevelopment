const tasks = require("../models/taskModel");

exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.send("Task not found");
  res.json(task);
};

exports.createTask = (req, res) => {
  tasks.push(req.body);
  res.send("Task added");
};

exports.updateTask = (req, res) => {
  let task = tasks.find(t => t.id == req.params.id);

  if (!task) return res.send("Task not found");

  task.title = req.body.title;
  task.completed = req.body.completed;

  res.send("Task updated");
};

exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);

  if (index === -1) return res.send("Task not found");

  tasks.splice(index, 1);
  res.send("Task deleted");
};