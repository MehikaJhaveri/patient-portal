import React, { useState } from "react";
import "./changePassword.css";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <label>Current Password</label>
      <input
        type="password"
        name="currentPassword"
        value={formData.currentPassword}
        onChange={handleInputChange}
      />

      <label>New Password</label>
      <input
        type="password"
        name="newPassword"
        value={formData.newPassword}
        onChange={handleInputChange}
      />

      <div className="form-actions">
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
};

export default ChangePassword;
