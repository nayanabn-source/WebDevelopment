const express = require("express");
const app = express();

app.use(express.json());

// Sample tasks
let tasks = [
  { id: 1, title: "Learn Node", completed: false },
  { id: 2, title: "Build API", completed: false }
];

// ✅ GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// ✅ GET single task
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.send("Task not found");
  res.json(task);
});

// ✅ POST (Create task)
app.post("/tasks", (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.send("Task added successfully");
});

// ✅ PUT (Update task)
app.put("/tasks/:id", (req, res) => {
  let task = tasks.find(t => t.id == req.params.id);

  if (!task) return res.send("Task not found");

  task.title = req.body.title;
  task.completed = req.body.completed;

  res.send("Task updated successfully");
});

// ✅ DELETE task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.send("Task deleted successfully");
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});