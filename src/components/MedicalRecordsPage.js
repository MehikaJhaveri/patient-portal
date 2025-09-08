import React, { useState } from "react";
import "./medicalRecords.css";

const currentRecordsData = [
  {
    date: "28 May 2024",
    conditions: "Hypertension",
    medications: "Amoxicillin 500mg",
    allergies: "Penicillin",
    recentAssessments: "Updated",
  },
  {
    date: "28 April 2024",
    conditions: "Hypertension",
    medications: "Amoxicillin 500mg",
    allergies: "Penicillin",
    recentAssessments: "Updated",
  },
];

const historicalRecordsData = [
  {
    date: "28 March 2024",
    conditions: "Hypertension",
    medications: "Amoxicillin 500mg",
    allergies: "Penicillin",
    recentAssessments: "Updated",
  },
  {
    date: "28 Feb 2024",
    conditions: "Hypertension",
    medications: "Amoxicillin 500mg",
    allergies: "Penicillin",
    recentAssessments: "Updated",
  },
  {
    date: "28 Jan 2024",
    conditions: "Hypertension",
    medications: "Amoxicillin 500mg",
    allergies: "Penicillin",
    recentAssessments: "Updated",
  },
];

const vitalsData = {
  bloodPressure: "120/80 mmHg",
  pulseRate: "70 beats per minute",
  respiratoryRate: "6 breaths per minute",
  temperature: "98.6°F (37°C)",
  height: "5 feet 10 inches (178 cm)",
  weight: "160 pounds (73 kg)",
  bmi: "23.0 (within the normal range)",
  spO2: "98%",
};

const MedicalRecordsPage = () => {
  const [activeTab, setActiveTab] = useState("Current Records");
  const [showVitals, setShowVitals] = useState(false);

  const renderRecords = (records) => {
    return (
      <div className="medical-records-list">
        {records.map((record, idx) => (
          <div key={idx} className="medical-record-item">
            <div className="record-content">
              <p>
                <strong>Conditions:</strong> {record.conditions}
              </p>
              <p>
                <strong>Medications:</strong> {record.medications}
              </p>
              <p>
                <strong>Allergies:</strong> {record.allergies}
              </p>
              <p>
                <strong>Recent Assessments:</strong> {record.recentAssessments}
              </p>
            </div>
            <div className="record-date">{record.date}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="medical-records-container">
      <div className="content-header">
        <h1 className="page-title">Medical Records</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {["Current Records", "Historical Records"].map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Vitals Button (only show on Current Records) */}
      {activeTab === "Current Records" && (
        <div className="vitals-section">
          <button
            className="vitals-btn"
            onClick={() => setShowVitals(!showVitals)}
          >
            Vitals
          </button>
        </div>
      )}

      {/* Vitals Display */}
      {showVitals && activeTab === "Current Records" && (
        <div className="vitals-display">
          <ul className="vitals-list">
            <li>
              <strong>Blood Pressure:</strong> {vitalsData.bloodPressure}
            </li>
            <li>
              <strong>Pulse Rate:</strong> {vitalsData.pulseRate}
            </li>
            <li>
              <strong>Respiratory Rate:</strong>{" "}
              {vitalsData.respiratoryRate}
            </li>
            <li>
              <strong>Temperature:</strong> {vitalsData.temperature}
            </li>
            <li>
              <strong>Height:</strong> {vitalsData.height}
            </li>
            <li>
              <strong>Weight:</strong> {vitalsData.weight}
            </li>
            <li>
              <strong>BMI (Body Mass Index):</strong> {vitalsData.bmi}
            </li>
            <li>
              <strong>SpO2 (Oxygen Saturation):</strong> {vitalsData.spO2}
            </li>
          </ul>
        </div>
      )}

      {/* Tab Content */}
      {activeTab === "Current Records"
        ? renderRecords(currentRecordsData)
        : renderRecords(historicalRecordsData)}
    </div>
  );
};

export default MedicalRecordsPage;