import React, { useState } from "react";
import "./notificationPreferences.css";

const NotificationPreferences = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  const handleSave = () => {
    alert("Notification preferences saved!");
  };

  return (
    <div className="notification-container">
      <div className="notification-header">
        <h2>Settings</h2>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>

      <h3 className="section-title">Notification Preferences</h3>

      <div className="preference-item">
        <span>Email Notifications</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="preference-item">
        <span>SMS Notifications</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={() => setSmsNotifications(!smsNotifications)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="preference-item">
        <span>Push Notifications</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={pushNotifications}
            onChange={() => setPushNotifications(!pushNotifications)}
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

export default NotificationPreferences;
