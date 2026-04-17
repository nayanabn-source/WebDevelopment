const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userModel");

const app = express();
app.use(express.json());

// connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/crudDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


// ✅ CREATE
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User Created");
});


// ✅ READ (all)
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});


// ✅ READ (single)
app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});


// ✅ UPDATE
app.put("/users/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send("User Updated");
});


// ✅ DELETE
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User Deleted");
});


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});