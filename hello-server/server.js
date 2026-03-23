const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  
  // Home route
  if (req.url === "/") {
    res.write("Welcome to Home Page");
  }

  // About route
  else if (req.url === "/about") {
    res.write("This is About Page");
  }

  // Contact route
  else if (req.url === "/contact") {
    res.write("Contact us at support@example.com");
  }

  // 404 route
  else {
    res.write("404 Page Not Found");
  }

  res.end();
});

// Start server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});