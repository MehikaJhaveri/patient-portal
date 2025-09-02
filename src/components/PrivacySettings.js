import React, { useState } from "react";
import "./privacySettings.css";

const PrivacySettings = () => {
  const [accountPrivate, setAccountPrivate] = useState(true);
  const [dataAccess, setDataAccess] = useState(true);
  const [manageConsent, setManageConsent] = useState(true);

  const handleSave = () => {
    alert("Privacy settings saved!");
  };

  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h2>Settings</h2>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>

      <h3 className="section-title">Privacy Settings</h3>

      <div className="privacy-item">
        <span>Account Private</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={accountPrivate}
            onChange={() => setAccountPrivate(!accountPrivate)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="privacy-item">
        <span>Data Access</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={dataAccess}
            onChange={() => setDataAccess(!dataAccess)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="privacy-item">
        <span>Manage Consent</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={manageConsent}
            onChange={() => setManageConsent(!manageConsent)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default PrivacySettings;
