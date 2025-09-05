import React, { useState } from "react";
import "./recentVisits.css";

const visitsData = [
  { date: "28 May 2024", purpose: "Regular Checkup", doctor: "Dr. SM John" },
  { date: "28 April 2024", purpose: "Regular Checkup", doctor: "Dr. SM John" },
  { date: "28 March 2024", purpose: "Regular Checkup", doctor: "Dr. SM John" },
  { date: "28 Feb 2024", purpose: "Regular Checkup", doctor: "Dr. SM John" },
  { date: "28 Jan 2024", purpose: "Regular Checkup", doctor: "Dr. SM John" },
];

// Sample clinical summary (from the image)
const clinicalSummary = {
  chiefComplaints: "Patient reports experiencing persistent headaches and dizziness for the past week.",
  hpi: "Patient states that headaches started gradually and have been accompanied by nausea and occasional blurred vision. No history of recent head trauma.",
  pmh: "Patient has a history of hypertension diagnosed two years ago. No history of surgeries or hospitalizations.",
  medicationHistory: "Patient is currently taking lisinopril 10 mg once daily for hypertension control.",
  testResults: "Recent blood pressure readings indicate elevated levels consistently above 140/90 mmHg.",
  reminders: "Patient has an upcoming appointment for a follow-up blood pressure check.",
  planCare: "Increase lisinopril dosage to 20 mg once daily. Advise patient to monitor blood pressure regularly and report any significant changes or adverse effects."
};

const RecentVisitsPage = () => {
  const [activeTab, setActiveTab] = useState("Recent Visits");

  return (
    <div className="recent-visits-container">
      <div className="content-header">
        <h1 className="page-title">Recent Visits</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
          />
        </div>
        <div className="profile-circle"></div>
      </div>

      <p className="welcome-text">Your recent medical visits</p>

      {/* Tabs */}
      <div className="tabs">
        {["Recent Visits", "Visit History"].map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Recent Visits" ? (
        <div className="visit-details">
          <p>
            <strong>Date of Visit:</strong> 28 May 2024
          </p>
          <p>
            <strong>Doctor's Name:</strong> Dr. SM John
          </p>

          <div className="condition">
            <button
              className="condition-link"
              onClick={() => console.log("Hypertension clicked")}
            >
              Hypertension
            </button>
            <ul>
              <li>Description: High blood pressure</li>
              <li>Date of Onset: 2019-03-12</li>
              <li>Status: Active</li>
              <li>ICD Code: I10</li>
              <li>Severity Impact: Moderate</li>
              <li>Risk Factors/Comorbidities: Obesity, Family history</li>
              <li>Treatment Plan: ACE inhibitor, lifestyle changes</li>
              <li>Test Results: Link</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="visit-history">
          {visitsData.map((visit, idx) => (
            <div key={idx} className="visit-item">
              <p>
                <strong>Purpose of Visit:</strong> {visit.purpose}
              </p>
              <p>
                <strong>Doctors Names:</strong> {visit.doctor}
              </p>
              <p className="visit-date">{visit.date}</p>
            </div>
          ))}
        </div>
      )}

      {/* Clinical Summary Section */}
      <div className="clinical-summary">
        <p><strong>Chief Complaints:</strong> {clinicalSummary.chiefComplaints}</p>
        <p><strong>HPI:</strong> {clinicalSummary.hpi}</p>
        <p><strong>PMH:</strong> {clinicalSummary.pmh}</p>
        <p><strong>Medication History:</strong> {clinicalSummary.medicationHistory}</p>
        <p><strong>Tests Results:</strong> {clinicalSummary.testResults}</p>
        <p><strong>Reminders/ Alerts:</strong> {clinicalSummary.reminders}</p>
        <p><strong>Plan Care:</strong> {clinicalSummary.planCare}</p>
      </div>

      <button className="next-btn">Next</button>
    </div>
  );
};

export default RecentVisitsPage;
