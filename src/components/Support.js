// src/pages/Support.js
import React, { useState } from "react";
import "./support.css"; // ✅ styling

const Support = () => {
  const [query, setQuery] = useState("");

  const handleGetHelp = () => {
    if (query.trim() === "") {
      alert("Please enter your issue before requesting help.");
    } else {
      alert(`Support request submitted: ${query}`);
    }
  };

  const handleSave = () => {
    alert(`Your support request has been saved:\n${query}`);
  };

  return (
    <div className="support-container">
      <h2 className="support-title">Support and Help</h2>
      <h3 className="support-subtitle">Need Some Help?</h3>

      <div className="support-input-container">
        <input
          type="text"
          placeholder="What are you having trouble with?"
          className="support-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="get-help-btn" onClick={handleGetHelp}>
          Get Help
        </button>
      </div>

      <div className="support-actions">
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Support;
