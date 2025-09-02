import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout"; // Import the new Layout component
import Dashboard from "./components/dashboard"; 
import RecentVisitsPage from "./components/RecentVisitsPage"; 
import MedicalRecordsPage from "./components/MedicalRecordsPage"; 
import SettingsPage from "./components/SettingsPage"; 
import ProfileInfo from "./components/ProfileInfo";   
import AccountSecurity from "./components/AccountSecurity"; 
import NotificationPreferences from "./components/NotificationPreferences"; 
import PrivacySettings from "./components/PrivacySettings"; 
import DataSharing from "./components/DataSharing"; 
import ConnectedDevices from "./components/ConnectedDevices"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login route (no sidebar) */}
          <Route path="/" element={<Login />} />

          {/* All other routes use Layout (with sidebar) */}
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="recent-visits" element={<RecentVisitsPage />} />
            <Route path="medical-records" element={<MedicalRecordsPage />} />
            
            {/* Settings route with nested pages */}
            <Route path="settings" element={<SettingsPage />}>
              <Route index element={<ProfileInfo />} />
              <Route path="profile-info" element={<ProfileInfo />} />
              <Route path="account-security" element={<AccountSecurity />} />
              <Route path="notification-preferences" element={<NotificationPreferences />} />
              <Route path="privacy-settings" element={<PrivacySettings />} />
              <Route path="data-sharing" element={<DataSharing />} />
              <Route path="connected-devices" element={<ConnectedDevices />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;