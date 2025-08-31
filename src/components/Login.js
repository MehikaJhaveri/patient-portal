import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      // Navigate to dashboard instead of showing alert
      navigate("/dashboard");
      setError("");
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-panel">
        <h1>SSPD</h1>
        <h2>Patient Portal</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;