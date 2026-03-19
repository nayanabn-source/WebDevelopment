import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Common styles
const containerStyle = {
  textAlign: "center",
  marginTop: "50px",
  fontFamily: "Arial, sans-serif",
};

const navStyle = {
  marginBottom: "20px",
};

const linkStyle = {
  margin: "0 10px",
  textDecoration: "none",
  color: "white",
  background: "#3498db",
  padding: "8px 15px",
  borderRadius: "5px",
};

const cardStyle = {
  margin: "auto",
  width: "60%",
  padding: "20px",
  borderRadius: "10px",
  background: "#f9f9f9",
  boxShadow: "0px 0px 10px gray",
};

// Home Page
function Home() {
  return (
    <div style={cardStyle}>
      <h2 style={{ color: "blue" }}>🏠 Home Page</h2>
      <p>
        Welcome to our stylish multi-page React application. This page gives an
        overview of how navigation works without reloading the browser.
      </p>
      <p>
        This project demonstrates Single Page Application (SPA) using React Router.
      </p>
    </div>
  );
}

// About Page
function About() {
  return (
    <div style={cardStyle}>
      <h2 style={{ color: "#27ae60" }}>📘 About Us</h2>
      <p>
        This application is built using React and React Router. It helps in
        understanding navigation between pages.
      </p>
      <p>
        It shows how components are rendered dynamically based on URL paths.
      </p>
    </div>
  );
}

// Contact Page
function Contact() {
  return (
    <div style={cardStyle}>
      <h2 style={{ color: "#e74c3c" }}>📞 Contact Us</h2>
      <p>If you have any questions, feel free to reach out!</p>
      <p>
        📧 Email: support@example.com <br />
        📱 Phone: +91 9876543210
      </p>
    </div>
  );
}

// Main App
function App() {
  return (
    <Router>
      <div style={containerStyle}>
        <h1 style={{ color: "#2c3e50" }}>✨ My Multi-Page App</h1>

        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;