import React from "react";
import { Outlet } from "react-router-dom";
import "./settingsPage.css";

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <Outlet />
    </div>
  );
};

export default SettingsPage;