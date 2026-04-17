const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
    const user = new User(req.body); // Creates a new user instance with data from the request
    await user.save();               // Saves the new user to the database
    res.json(user);                  // Sends the saved user object back as a JSON response
});

router.get("/", async (req, res) => {
    const users = await User.find(); // Fetches all user documents from the collection
    res.json(users);                 // Returns an array of all users as JSON
});

router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id); // Finds a specific user by the ID in the URL
    res.json(user);                                  // Returns that specific user
});
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
});

router.delete("/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
});

module.exports = router;