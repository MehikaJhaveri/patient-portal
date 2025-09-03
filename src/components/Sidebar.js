import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showSecurityOptions, setShowSecurityOptions] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      window.location.href = "/";
    }
  };

  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <div className="logo">SP</div>
        <div className="header-title">SSPD Patient Portal</div>
      </div>

      {/* Main navigation */}
      {["Dashboard", "Recent Visits", "Medical Records", "Billing"].map(
        (item) => (
          <div
            key={item}
            className="nav-item"
            onClick={() => navigate(`/${item.toLowerCase().replace(" ", "-")}`)}
          >
            <div className="nav-item-content">
              <div className="nav-text">{item}</div>
            </div>
          </div>
        )
      )}

      {/* Settings toggle */}
      <div
        className={`nav-item ${showSettings ? "active" : ""}`}
        onClick={() => setShowSettings(!showSettings)}
      >
        <div className="nav-item-content">
          <div className="nav-text">Settings</div>
          <span className="toggle-arrow">{showSettings ? "▲" : "▼"}</span>
        </div>
      </div>

      {/* Settings subnav (only visible when toggled) */}
      {showSettings && (
        <div className="settings-subnav">
          {/* Profile Information */}
          <div
            className="settings-nav-item"
            onClick={() => navigate("/settings/profile-info")}
          >
            <div className="nav-item-content">
              <div className="nav-text">Profile Information</div>
            </div>
          </div>

          {/* Account Security */}
          <div className="account-security-container">
            <div
              className="settings-nav-item"
              onClick={() => setShowSecurityOptions(!showSecurityOptions)}
            >
              <div className="nav-item-content">
                <div className="nav-text">Account Security</div>
                <span className="toggle-arrow">
                  {showSecurityOptions ? "▲" : "▼"}
                </span>
              </div>
            </div>

            {/* Nested sub-options */}
            {/* Nested sub-options */}
              {showSecurityOptions && (
                <div className="sub-options">
                  <div
                    className="settings-nav-item"
                    onClick={() => navigate("/settings/account-security/change-password")}
                  >
                    <div className="nav-item-content">
                      <div className="nav-text">Change Password</div>
                    </div>
                  </div>
                  <div
                    className="settings-nav-item"
                    onClick={() => navigate("/settings/account-security/two-factor")}
                  >
                    <div className="nav-item-content">
                      <div className="nav-text">Two-Factor Authentication</div>
                    </div>
                  </div>
                  <div
                    className="settings-nav-item"
                    onClick={() => navigate("/settings/account-security/security-questions")}
                  >
                    <div className="nav-item-content">
                      <div className="nav-text">Security Questions</div>
                    </div>
                  </div>
                </div>
              )}

          </div>

          {/* Other settings */}
          <div
            className="settings-nav-item"
            onClick={() => navigate("/settings/notification-preferences")}
          >
            <div className="nav-item-content">
              <div className="nav-text">Notification Preferences</div>
            </div>
          </div>

          <div
            className="settings-nav-item"
            onClick={() => navigate("/settings/privacy-settings")}
          >
            <div className="nav-item-content">
              <div className="nav-text">Privacy Settings</div>
            </div>
          </div>

          <div
            className="settings-nav-item"
            onClick={() => navigate("/settings/data-sharing")}
          >
            <div className="nav-item-content">
              <div className="nav-text">Data Sharing</div>
            </div>
          </div>

          <div
            className="settings-nav-item"
            onClick={() => navigate("/settings/connected-devices")}
          >
            <div className="nav-item-content">
              <div className="nav-text">Connected Devices</div>
            </div>
          </div>

          <div
            className="settings-nav-item"
            onClick={() => navigate("/settings/support")}
          >
            <div className="nav-item-content">
              <div className="nav-text">Support and Help</div>
            </div>
          </div>
        </div>
      )}

      {/* Logout at the bottom */}
      <div className="nav-item logout-button" onClick={handleLogout}>
        <div className="nav-item-content">
          <div className="nav-text">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
