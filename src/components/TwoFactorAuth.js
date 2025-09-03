import React, { useState } from "react";
import "./twoFactorAuth.css"; // ✅ create this CSS file for styling

const TwoFactorAuth = () => {
  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    setEnabled((prev) => !prev);
  };

  const handleSave = () => {
    alert(`Two-Factor Authentication ${enabled ? "enabled" : "disabled"}`);
  };

  return (
    <div className="content">

      {/* Toggle Option */}
      <div className="toggle-container">
        <label className="toggle-label">Two-Factor Authentication</label>
        <label className="switch">
          <input type="checkbox" checked={enabled} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>

      {/* Save Button */}
      <div className="form-actions">
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
