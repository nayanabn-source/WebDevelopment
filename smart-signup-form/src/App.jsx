import React, { useState } from "react";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMessage("❌ Invalid email format");
      return false;
    }

    if (password.length < 6) {
      setMessage("❌ Password must be at least 6 characters long");
      return false;
    }

    if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      setMessage("❌ Must contain uppercase & number");
      return false;
    }

    setMessage("✅ Signup successful!");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  return (
    <div style={{
      textAlign: "center",
      marginTop: "50px",
      fontFamily: "Arial"
    }}>
      <h2 style={{ color: "#3498db" }}>📝 Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "10px", margin: "10px", width: "250px" }}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", margin: "10px", width: "250px" }}
          />
        </div>

        <button style={{
          padding: "10px 20px",
          background: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
          Sign Up
        </button>
      </form>

      <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>
    </div>
  );
}

export default SignupForm;