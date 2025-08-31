import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/dashboard"; // existing
import RecentVisitsPage from "./components/RecentVisitsPage"; // existing
import MedicalRecordsPage from "./components/MedicalRecordsPage"; // new import
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route = Login */}
          <Route path="/" element={<Login />} />

          {/* Dashboard route */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Recent Visits route */}
          <Route path="/recent-visits" element={<RecentVisitsPage />} />

          {/* Medical Records route */}
          <Route path="/medical-records" element={<MedicalRecordsPage />} /> {/* new route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;