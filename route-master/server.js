const express = require("express");
const app = express();

app.use(express.json());

// Sample data
let books = [
  { id: 1, name: "Harry Potter", author: "J.K. Rowling" },
  { id: 2, name: "The Alchemist", author: "Paulo Coelho" }
];

let authors = [
  { id: 1, name: "J.K. Rowling" },
  { id: 2, name: "Paulo Coelho" }
];

// Routes

// Home
app.get("/", (req, res) => {
  res.send("Welcome to Bookstore API");
});

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Get all authors
app.get("/authors", (req, res) => {
  res.json(authors);
});

// Add a new book
app.post("/books", (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.send("Book added successfully");
});

// Add a new author
app.post("/authors", (req, res) => {
  const newAuthor = req.body;
  authors.push(newAuthor);
  res.send("Author added successfully");
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});