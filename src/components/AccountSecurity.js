// src/components/AccountSecurity.js
import React from "react";
import { Outlet } from "react-router-dom";
import "./accountSecurity.css";

const AccountSecurity = () => {
  return (
    <div className="content">
      <div className="content-header">
        <h1 className="page-title">Account Security</h1>
        <div className="search-container">
          <input type="text" className="search-box" placeholder="Search..." />
        </div>
      </div>

      {/* ✅ Render nested pages here */}
      <div className="security-form">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountSecurity;
