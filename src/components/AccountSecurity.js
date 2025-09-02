import React, { useState } from "react";
import "./accountSecurity.css";

const AccountSecurity = () => {
  const [activeTab, setActiveTab] = useState("Change Password");
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    twoFactorCode: "",
    securityAnswer: "",
  });

  const sidebarItems = [
    "Change Password",
    "Two-Factor Authentication",
    "Security Questions",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="account-security-container">
      {/* Account Security Sub-navigation */}
      <div className="account-security-sidebar">
        {sidebarItems.map((item) => (
          <div
            key={item}
            className={`security-nav-item ${
              item === activeTab ? "active" : ""
            }`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="account-security-content">
        <div className="content-header">
          <h1 className="page-title">Account Security</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-box"
            />
          </div>
          <div className="profile-circle"></div>
        </div>

        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">{activeTab}</h2>
        </div>

        {/* Forms */}
        <div className="form-container">
          {activeTab === "Change Password" && (
            <>
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
            </>
          )}

          {activeTab === "Two-Factor Authentication" && (
            <>
              <label>Enter Verification Code</label>
              <input
                type="text"
                name="twoFactorCode"
                value={formData.twoFactorCode}
                onChange={handleInputChange}
              />
            </>
          )}

          {activeTab === "Security Questions" && (
            <>
              <label>What is your mother's maiden name?</label>
              <input
                type="text"
                name="securityAnswer"
                value={formData.securityAnswer}
                onChange={handleInputChange}
              />
            </>
          )}
        </div>

        <div className="form-actions">
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSecurity;