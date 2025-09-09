import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./medicalRecords.css";

// Current records
// Current records
const currentRecordsData = [
  {
    date: "28 June 2024",
    conditions: "Diabetes Mellitus Type 2",
    medications: "Metformin 500mg twice daily",
    allergies: "None",
    recentAssessments: "Updated",
    visitIndex: 0, // links to visitsData[0] (June visit)
  },
  {
    date: "28 May 2024",
    conditions: "Hypertension",
    medications: "Amoxicillin 500mg",
    allergies: "Penicillin",
    recentAssessments: "Updated",
    visitIndex: 1, // links to visitsData[1] (May visit)
  },
  {
    date: "28 April 2024",
    conditions: "Hypertension",
    medications: "Amoxicillin 500mg",
    allergies: "Penicillin",
    recentAssessments: "Updated",
    visitIndex: 2, // links to visitsData[2] (April visit)
  },
];


// Historical records
const historicalRecordsData = [
  {
    date: "28 March 2024",
    conditions: "Back Pain",
    medications: "Ibuprofen 200mg",
    allergies: "None",
    recentAssessments: "Updated",
    visitIndex: 3, // links to visitsData
  },
  {
    date: "28 Feb 2024",
    conditions: "Flu Symptoms",
    medications: "Paracetamol 500mg",
    allergies: "None",
    recentAssessments: "Updated",
    visitIndex: 4, // added vitals in visitsData
  },
  {
    date: "28 Jan 2024",
    conditions: "Cold",
    medications: "None",
    allergies: "None",
    recentAssessments: "Updated",
    visitIndex: 5, // added vitals in visitsData
  },
];

const MedicalRecordsPage = () => {
  const [activeTab, setActiveTab] = useState("Current Records");
  const navigate = useNavigate();

  const renderRecords = (records) => {
    return (
      <div className="medical-records-list">
        {records.map((record, idx) => (
          <div key={idx} className="medical-record-item">
            <div className="record-content">
              <p><strong>Conditions:</strong> {record.conditions}</p>
              <p><strong>Medications:</strong> {record.medications}</p>
              <p><strong>Allergies:</strong> {record.allergies}</p>
              <p><strong>Recent Assessments:</strong> {record.recentAssessments}</p>
              
              {/* Vitals button moved below content */}
              <div className="vitals-below-content">
                {record.visitIndex !== null && (
                  <button
                    className="vitals-btn"
                    onClick={() =>
                      navigate("/recent-visits", {
                        state: { openVitals: true, visitIndex: record.visitIndex },
                      })
                    }
                  >
                    Vitals
                  </button>
                )}
              </div>
            </div>
            
            <div className="record-actions">
              <div className="record-date">{record.date}</div>
            </div>
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

      {/* Tab Content */}
      {activeTab === "Current Records"
        ? renderRecords(currentRecordsData)
        : renderRecords(historicalRecordsData)}
    </div>
  );
};

export default MedicalRecordsPage;