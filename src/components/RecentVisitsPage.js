import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // <-- for accessing location.state
import "./recentVisits.css";

const visitsData = [
  { 
    date: "28 June 2024", 
    purpose: "Diabetes Follow-up", 
    doctor: "Dr. SM John",
    clinicalSummary: {
      chiefComplaints: "Patient reports stable blood sugar levels with occasional morning spikes.",
      hpi: "Blood glucose readings have been within target range for the past month with lifestyle modifications.",
      pmh: "Type 2 diabetes diagnosed 6 months ago. History of hypertension.",
      medicationHistory: "Metformin 500mg twice daily, previously on Lisinopril.",
      testResults: "HbA1c: 6.8%, fasting glucose: 125 mg/dL.",
      reminders: "Continue current medication regimen, quarterly HbA1c monitoring.",
      planCare: "Maintain current Metformin dose, dietary counseling, regular exercise."
    },
    vitals: {
      bloodPressure: "128/84 mmHg",
      pulseRate: "74 beats per minute",
      respiratoryRate: "16 breaths per minute",
      temperature: "98.4°F (36.9°C)",
      height: "5 feet 10 inches (178 cm)",
      weight: "165 pounds (75 kg)",
      bmi: "23.6 (within the normal range)",
      spo2: "98%"
    }
  },
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
    },
    vitals: {
      bloodPressure: "120/80 mmHg",
      pulseRate: "70 beats per minute",
      respiratoryRate: "16 breaths per minute",
      temperature: "98.6°F (37°C)",
      height: "5 feet 10 inches (178 cm)",
      weight: "160 pounds (73 kg)",
      bmi: "23.0 (within the normal range)",
      spo2: "98%"
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
    },
    vitals: {
      bloodPressure: "118/76 mmHg",
      pulseRate: "80 beats per minute",
      respiratoryRate: "16 breaths per minute",
      temperature: "100.4°F (38°C)",
      height: "5 feet 10 inches (178 cm)",
      weight: "158 pounds (72 kg)",
      bmi: "22.7 (within the normal range)",
      spo2: "97%"
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
    },
    vitals: {
      bloodPressure: "122/82 mmHg",
      pulseRate: "72 beats per minute",
      respiratoryRate: "15 breaths per minute",
      temperature: "98.2°F (36.8°C)",
      height: "5 feet 10 inches (178 cm)",
      weight: "162 pounds (74 kg)",
      bmi: "23.2 (within the normal range)",
      spo2: "99%"
    }
  },
  { 
    date: "28 Feb 2024", 
    purpose: "Flu Symptoms", 
    doctor: "Dr. SM Jane",
    clinicalSummary: {
      chiefComplaints: "Fever, body aches, mild cough.",
      hpi: "Symptoms started 2 days ago.",
      pmh: "No chronic conditions.",
      medicationHistory: "Paracetamol occasionally.",
      testResults: "Rapid flu test pending.",
      reminders: "Rest and hydration.",
      planCare: "Supportive care."
    },
    vitals: {
      bloodPressure: "117/75 mmHg",
      pulseRate: "78 beats per minute",
      respiratoryRate: "16 breaths per minute",
      temperature: "99.5°F (37.5°C)",
      height: "5 feet 10 inches (178 cm)",
      weight: "157 pounds (71 kg)",
      bmi: "22.5 (normal)",
      spo2: "97%"
    }
  },
  { 
    date: "28 Jan 2024", 
    purpose: "Cold", 
    doctor: "Dr. SM Jane",
    clinicalSummary: {
      chiefComplaints: "Runny nose, mild headache.",
      hpi: "Symptoms for 1 day.",
      pmh: "No chronic conditions.",
      medicationHistory: "None.",
      testResults: "None.",
      reminders: "Monitor symptoms.",
      planCare: "Supportive care, rest."
    },
    vitals: {
      bloodPressure: "116/74 mmHg",
      pulseRate: "75 beats per minute",
      respiratoryRate: "16 breaths per minute",
      temperature: "98.8°F (37.1°C)",
      height: "5 feet 10 inches (178 cm)",
      weight: "156 pounds (71 kg)",
      bmi: "22.4 (normal)",
      spo2: "98%"
    }
  }
];

const RecentVisitsPage = () => {
  const [activeTab, setActiveTab] = useState("Recent Visits");
  const [selectedVisit, setSelectedVisit] = useState(null);
  const [selectedVitals, setSelectedVitals] = useState(null);

  const location = useLocation(); // <-- useLocation hook

  useEffect(() => {
    if (location.state?.openVitals && location.state?.visitIndex !== null) {
      setActiveTab("Vitals");
      setSelectedVitals(location.state.visitIndex);
    }
  }, [location.state]); // now using React Router state correctly

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
        {["Recent Visits", "Visit History", "Vitals"].map((tab) => (
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
        <>
          <div className="visit-details">
            <p><strong>Date of Visit:</strong> {mostRecentVisit.date}</p>
            <p><strong>Doctor's Name:</strong> {mostRecentVisit.doctor}</p>

            <div className="condition">
              <button
                className="condition-link"
                onClick={() => console.log("Diabetes Mellitus Type 2 clicked")}
              >
                Diabetes Mellitus Type 2
              </button>
              <ul>
                <li>Description: Type 2 diabetes mellitus</li>
                <li>Date of Onset: 2023-12-15</li>
                <li>Status: Active</li>
                <li>ICD Code: E11.9</li>
                <li>Severity Impact: Moderate</li>
                <li>Risk Factors: Obesity, Family history, Sedentary lifestyle</li>
                <li>Treatment Plan: Metformin, dietary modifications, exercise</li>
                <li>Test Results: Link</li>
              </ul>
            </div>
          </div>

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
      ) : activeTab === "Visit History" ? (
        <div className="visit-history">
          {visitsData.map((visit, idx) => (
            <div key={idx} className="visit-item">
              <div className="visit-header">
                <p><strong>Purpose of Visit:</strong> {visit.purpose}</p>
                <p><strong>Doctor's Name:</strong> {visit.doctor}</p>
                <p className="visit-date">{visit.date}</p>
              </div>

              <div className="visit-actions">
                <button
                  className="vitals-btn"
                  onClick={() => {
                    setSelectedVitals(idx);
                    setActiveTab("Vitals");
                  }}
                >
                  Vitals
                </button>

                <button
                  className="summary-btn"
                  onClick={() => setSelectedVisit(selectedVisit === idx ? null : idx)}
                >
                  Clinical Summary
                </button>
              </div>

              {selectedVisit === idx && (
                <div className="clinical-summary">
                  <p><strong>Chief Complaints:</strong> {visit.clinicalSummary.chiefComplaints}</p>
                  <p><strong>HPI:</strong> {visit.clinicalSummary.hpi}</p>
                  <p><strong>PMH:</strong> {visit.clinicalSummary.pmh}</p>
                  <p><strong>Medication History:</strong> {visit.clinicalSummary.medicationHistory}</p>
                  <p><strong>Test Results:</strong> {visit.clinicalSummary.testResults}</p>
                  <p><strong>Reminders:</strong> {visit.clinicalSummary.reminders}</p>
                  <p><strong>Plan Care:</strong> {visit.clinicalSummary.planCare}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : activeTab === "Vitals" && selectedVitals !== null ? (
        <div className="vitals-summary">
          <h2>Vitals for {visitsData[selectedVitals].date}</h2>
          <p><strong>Blood Pressure:</strong> {visitsData[selectedVitals].vitals.bloodPressure}</p>
          <p><strong>Pulse Rate:</strong> {visitsData[selectedVitals].vitals.pulseRate}</p>
          <p><strong>Respiratory Rate:</strong> {visitsData[selectedVitals].vitals.respiratoryRate}</p>
          <p><strong>Temperature:</strong> {visitsData[selectedVitals].vitals.temperature}</p>
          <p><strong>Height:</strong> {visitsData[selectedVitals].vitals.height}</p>
          <p><strong>Weight:</strong> {visitsData[selectedVitals].vitals.weight}</p>
          <p><strong>BMI:</strong> {visitsData[selectedVitals].vitals.bmi}</p>
          <p><strong>SpO₂:</strong> {visitsData[selectedVitals].vitals.spo2}</p>
        </div>
      ) : null}
    </div>
  );
};

export default RecentVisitsPage;