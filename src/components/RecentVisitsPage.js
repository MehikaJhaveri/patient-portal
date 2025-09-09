import React, { useState } from "react";
import "./recentVisits.css";

const visitsData = [
  { 
    date: "28 May 2024", 
    purpose: "Regular Checkup", 
    doctor: "Dr. SM John",
    clinicalSummary: {
      chiefComplaints: "Patient reports experiencing persistent headaches and dizziness for the past week.",
      hpi: "Headaches started gradually with nausea and occasional blurred vision.",
      pmh: "History of hypertension diagnosed two years ago. No prior surgeries.",
      medicationHistory: "Lisinopril 10 mg once daily.",
      testResults: "BP readings consistently above 140/90 mmHg.",
      reminders: "Follow-up appointment for BP check scheduled.",
      planCare: "Increase lisinopril to 20 mg daily, monitor BP regularly."
    }
  },
  { 
    date: "28 April 2024", 
    purpose: "Flu Symptoms", 
    doctor: "Dr. SM John",
    clinicalSummary: {
      chiefComplaints: "Fever, cough, and sore throat for 3 days.",
      hpi: "Symptoms started suddenly, no history of recent travel.",
      pmh: "No chronic conditions. No prior hospitalizations.",
      medicationHistory: "Occasional paracetamol for fever.",
      testResults: "Rapid flu test positive for Influenza A.",
      reminders: "Complete prescribed 5-day antiviral course.",
      planCare: "Supportive care, hydration, rest."
    }
  },
  { 
    date: "28 March 2024", 
    purpose: "Back Pain", 
    doctor: "Dr. SM John",
    clinicalSummary: {
      chiefComplaints: "Chronic lower back pain, worsens with prolonged sitting.",
      hpi: "Pain ongoing for 6 months, occasional radiation to left leg.",
      pmh: "No previous spinal surgery. No diabetes or hypertension.",
      medicationHistory: "Occasional ibuprofen use.",
      testResults: "MRI showed mild lumbar disc bulge.",
      reminders: "Physiotherapy follow-up scheduled.",
      planCare: "Recommend physiotherapy, posture correction, pain management."
    }
  }
];

const RecentVisitsPage = () => {
  const [activeTab, setActiveTab] = useState("Recent Visits");
  const [selectedVisit, setSelectedVisit] = useState(null);

  // most recent visit = first item in array
  const mostRecentVisit = visitsData[0];

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
      </div>

      <p className="welcome-text">Your recent medical visits</p>

      {/* Tabs */}
      <div className="tabs">
        {["Recent Visits", "Visit History"].map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setSelectedVisit(null); // reset when switching tabs
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Recent Visits" ? (
        <>
          <div className="visit-details">
            <p>
              <strong>Date of Visit:</strong> {mostRecentVisit.date}
            </p>
            <p>
              <strong>Doctor's Name:</strong> {mostRecentVisit.doctor}
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
                <li>Risk Factors: Obesity, Family history</li>
                <li>Treatment Plan: ACE inhibitor, lifestyle changes</li>
                <li>Test Results: Link</li>
              </ul>
            </div>
          </div>

          {/* Clinical summary for most recent visit */}
          <div className="clinical-summary">
            <p><strong>Chief Complaints:</strong> {mostRecentVisit.clinicalSummary.chiefComplaints}</p>
            <p><strong>HPI:</strong> {mostRecentVisit.clinicalSummary.hpi}</p>
            <p><strong>PMH:</strong> {mostRecentVisit.clinicalSummary.pmh}</p>
            <p><strong>Medication History:</strong> {mostRecentVisit.clinicalSummary.medicationHistory}</p>
            <p><strong>Test Results:</strong> {mostRecentVisit.clinicalSummary.testResults}</p>
            <p><strong>Reminders:</strong> {mostRecentVisit.clinicalSummary.reminders}</p>
            <p><strong>Plan Care:</strong> {mostRecentVisit.clinicalSummary.planCare}</p>
          </div>
        </>
      ) : (
        <>
          <div className="visit-history">
            {visitsData.map((visit, idx) => (
              <div 
                key={idx} 
                className="visit-item"
                onClick={() => setSelectedVisit(visit)} 
                style={{ cursor: "pointer" }}
              >
                <div>
                  <p><strong>Purpose of Visit:</strong> {visit.purpose}</p>
                  <p><strong>Doctor's Name:</strong> {visit.doctor}</p>
                </div>
                <p className="visit-date">{visit.date}</p>
              </div>
            ))}
          </div>

          {/* Only show summary if a visit is clicked */}
          {selectedVisit && (
            <div className="clinical-summary">
              <p><strong>Chief Complaints:</strong> {selectedVisit.clinicalSummary.chiefComplaints}</p>
              <p><strong>HPI:</strong> {selectedVisit.clinicalSummary.hpi}</p>
              <p><strong>PMH:</strong> {selectedVisit.clinicalSummary.pmh}</p>
              <p><strong>Medication History:</strong> {selectedVisit.clinicalSummary.medicationHistory}</p>
              <p><strong>Test Results:</strong> {selectedVisit.clinicalSummary.testResults}</p>
              <p><strong>Reminders:</strong> {selectedVisit.clinicalSummary.reminders}</p>
              <p><strong>Plan Care:</strong> {selectedVisit.clinicalSummary.planCare}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RecentVisitsPage;
