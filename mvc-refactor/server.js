const express = require("express");
const app = express();

app.use(express.json());

// ✅ Home route
app.get("/", (req, res) => {
  res.send("Welcome to Task API (MVC)");
});

const taskRoutes = require("./routes/taskRoutes");
app.use("/", taskRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});