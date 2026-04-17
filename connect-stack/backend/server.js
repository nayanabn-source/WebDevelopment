const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// sample API
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// login API (dummy)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "123456") {
    res.json({ message: "Login success" });
  } else {
    res.json({ message: "Invalid credentials" });
  }
});

app.listen(3000, () => {
  console.log("Backend running at http://localhost:3000");
});