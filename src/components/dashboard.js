import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import "./dashboard.css";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const navigate = useNavigate(); // <-- initialize navigate

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      console.log("Logging out...");
      window.location.href = "/"; // back to login
    }
  };

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <>
            <h1 className="page-title">Dashboard</h1>
            <p className="welcome-text">Welcome, [Patient Name]</p>

            <div className="content-grid">
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
          </>
        );
      default:
        return null; // Other pages are handled by separate routes
    }
  };

  return (
    <>
      {/* Top Band */}
      <div className="top-band"></div>

      <div className="main-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="logo">SP</div>
            <div className="header-title">SSPD Patient Portal</div>
          </div>

          {/* Navigation */}
          {["Dashboard","Recent Visits","Medical Records","Billing","Settings","Logout"].map((item) => (
            <div
              key={item}
              className={`nav-item ${activePage === item ? "active" : ""}`}
              onClick={() => {
                if(item === "Logout") {
                  handleLogout();
                } else if(item === "Dashboard") {
                  setActivePage(item);
                } else if(item === "Recent Visits") {
                  navigate("/recent-visits");
                } else if(item === "Medical Records") {
                  navigate("/medical-records");
                } else if(item === "Billing") {
                  navigate("/billing");
                } else if(item === "Settings") {
                  navigate("/settings");
                }
              }}
            >
              <div className="nav-item-content">
                <div className="nav-text">{item}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="content">{renderContent()}</div>
      </div>
    </>
  );
};

export default Dashboard;
