const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// connect MongoDB (use your Atlas link here)
mongoose.connect("mongodb+srv://navyabn19_db_user:WYxFD6nYgiGDwg17@cluster0.5ektlfz.mongodb.net/authDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// routes
const authRoutes = require("./routes/authRoutes");
app.use("/", authRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});