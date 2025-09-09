import React from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  // Replace the hardcoded array with the June visit
  const recentVisits = [
    {
      date: "28 June 2024",
      doctor: "Dr. SM John",
      purpose: "Diabetes Follow-up",
      visitIndex: 0, // index in visitsData from RecentVisitsPage.js
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="content-header">
        <h1 className="page-title">Dashboard</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
          />
        </div>
      </div>

      <p className="welcome-text">Welcome, Carl Jones</p>

      <div className="content-grid">
        {/* Recent Visits */}
        <div className="recent-visits-section">
          <h2 className="section-title">Recent Visits</h2>
          <div className="visits-container">
            {recentVisits.map((visit, idx) => (
              <div className="visit-card" key={idx}>
                <div className="visit-info">
                  <div className="visit-label">Date of Visit:</div>
                  <div className="visit-value">{visit.date}</div>

                  <div className="visit-label">Doctor's Name:</div>
                  <div className="visit-value">{visit.doctor}</div>

                  <div className="visit-label">Purpose of Visit:</div>
                  <div className="visit-value">{visit.purpose}</div>
                </div>

                <button
                  className="view-more-btn"
                  onClick={() =>
                    navigate("/recent-visits", {
                      state: { openVitals: false, visitIndex: visit.visitIndex },
                    })
                  }
                >
                  View More 
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
