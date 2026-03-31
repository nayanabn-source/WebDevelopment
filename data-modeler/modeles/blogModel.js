const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

// Comment Schema
const commentSchema = new mongoose.Schema({
  text: String,
  user: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Blog Schema
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [commentSchema] // embedded comments
});

module.exports = mongoose.model("Blog", blogSchema);