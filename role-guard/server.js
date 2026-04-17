const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const verifyToken = require("./middleware/auth");
const checkRole = require("./middleware/role");

const app = express();

app.use(express.json());
app.use(cors());

// 🔗 MongoDB Atlas connection
mongoose.connect("mongodb+srv://navyabn19_db_user:WYxFD6nYgiGDwg17@cluster0.5ektlfz.mongodb.net/roleDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// routes
const authRoutes = require("./routes/authRoutes");
app.use("/", authRoutes);

// public
app.get("/", (req, res) => {
  res.send("Welcome to Role Guard");
});

// user route
app.get("/user", verifyToken, (req, res) => {
  res.send("User Dashboard");
});

// admin route
app.get("/admin", verifyToken, checkRole("admin"), (req, res) => {
  res.send("Admin Dashboard");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});