import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // reuse same style theme

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder action (replace with API call later)
    setMessage(`If ${email} is registered, a reset link has been sent.`);
  };

  return (
    <div className="login-container">
      <div className="login-panel">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
        {message && <p className="info">{message}</p>}
        <p className="forgot-password" onClick={() => navigate("/")}>
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
