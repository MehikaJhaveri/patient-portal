import React from "react";
import "./dashboard.css";

const Dashboard = () => {
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
        <div className="profile-circle"></div>
      </div>

      <p className="welcome-text">Welcome, [Patient Name]</p>

      <div className="content-grid">
        {/* Recent Visits */}
        <div className="recent-visits-section">
          <h2 className="section-title">Recent Visits</h2>
          <div className="visits-container">
            {["28 May 2024", "28 April 2024", "28 March 2024"].map(
              (date, idx) => (
                <div className="visit-card" key={idx}>
                  <div className="visit-info">
                    <div className="visit-label">Date of Visit:</div>
                    <div className="visit-value">{date}</div>
                    <div className="visit-label">Doctor's Name:</div>
                    <div className="visit-value">Dr SM John</div>
                    <div className="visit-label">Purpose of Visit:</div>
                    <div className="visit-value">Regular Checkup</div>
                  </div>
                  <button
                    className="view-more-btn"
                    onClick={() =>
                      console.log("View more clicked for", date)
                    }
                  >
                    View More ∨
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* Health Summary */}
        <div className="health-summary-section">
          <h2 className="section-title">Health Summary</h2>
          <div className="health-summary">
            <ul className="health-list">
              <li>Blood Pressure</li>
              <li>Pulse Rate</li>
              <li>Respiratory Rate</li>
              <li>Temperature</li>
              <li>Height</li>
              <li>Weight</li>
              <li>Pain Level</li>
              <li>SpO2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;