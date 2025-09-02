import React, { useState } from "react";
import "./profileInfo.css";

const profileData = {
  name: "Sam Finley John",
  dob: "02/10/1990",
  gender: "Male",
  address: "728 Clearview Drive, Lakewood, 80227, Colorado, United States",
  bloodGroup: "A+",
  occupation: "Service",
  aadharCard: "020202020202",
  panCard: "0202020202"
};

const contactData = {
  mobile: "+1 3447166844",
  home: "+1 9789609691",
  work: "+1 4017825419",
  email: "abc.emr@gmail.com",
  emergencyContactName: "Theodore Finley John",
  relationship: "Brother",
  emergencyContactNo: "+1 9789609691",
  emergencyEmail: "abc.emr@gmail.com"
};

const insuranceData = {
  companyName: "AllState",
  policyNumber: "99999999",
  planType: "Family Insurance",
  effectiveDates: "01/01/23-01/01/24",
  contactNo: "+1 9789609691"
};

const allergyData = [
  {
    id: 1,
    allergen: "Pollen",
    reaction: "Sneezing, Itchy Eyes",
    severity: "Mild",
    status: "Active",
    category: "Environmental",
    code: "ALG123"
  },
  {
    id: 2,
    allergen: "Penicillin",
    reaction: "Rash, Itching",
    severity: "Moderate",
    status: "Resolved",
    category: "Medication",
    code: "ALG456"
  }
];

const ProfileInfo = () => {
  const [showDemographics, setShowDemographics] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showInsurance, setShowInsurance] = useState(false);
  const [showAllergy, setShowAllergy] = useState(false);

  return (
    <div className="profile-section">
      <h2 className="section-title">Profile Information</h2>
      
      {/* Demographics */}
      <div className="demographics-section">
        <button 
          className="demographics-btn"
          onClick={() => setShowDemographics(!showDemographics)}
        >
          Demographics
        </button>
      </div>
      {showDemographics && (
        <div className="demographics-display">
          <div className="info-grid">
            <div className="info-row"><span className="info-label">Name:</span><span className="info-value">{profileData.name}</span></div>
            <div className="info-row"><span className="info-label">DOB:</span><span className="info-value">{profileData.dob}</span></div>
            <div className="info-row"><span className="info-label">Gender:</span><span className="info-value">{profileData.gender}</span></div>
            <div className="info-row"><span className="info-label">Address:</span><span className="info-value">{profileData.address}</span></div>
            <div className="info-row"><span className="info-label">Blood Group :</span><span className="info-value">{profileData.bloodGroup}</span></div>
            <div className="info-row"><span className="info-label">Occupation:</span><span className="info-value">{profileData.occupation}</span></div>
            <div className="info-row"><span className="info-label">Aadhar card no. :</span><span className="info-value">{profileData.aadharCard}</span></div>
            <div className="info-row"><span className="info-label">PAN Card no :</span><span className="info-value">{profileData.panCard}</span></div>
          </div>
        </div>
      )}

      {/* Contact Information */}
      <div className="contact-section">
        <button 
          className="contact-btn"
          onClick={() => setShowContact(!showContact)}
        >
          Contact Information
        </button>
      </div>
      {showContact && (
        <div className="contact-display">
          <div className="info-grid">
            <div className="info-row"><span className="info-label">Mobile Phone :</span><span className="info-value">{contactData.mobile}</span></div>
            <div className="info-row"><span className="info-label">Home Phone :</span><span className="info-value">{contactData.home}</span></div>
            <div className="info-row"><span className="info-label">Work Phone:</span><span className="info-value">{contactData.work}</span></div>
            <div className="info-row"><span className="info-label">Email Address:</span><span className="info-value">{contactData.email}</span></div>
            <div className="info-row"><span className="info-label">Emergency Contact Name:</span><span className="info-value">{contactData.emergencyContactName}</span></div>
            <div className="info-row"><span className="info-label">Relationship to patient :</span><span className="info-value">{contactData.relationship}</span></div>
            <div className="info-row"><span className="info-label">Emergency Contact no.:</span><span className="info-value">{contactData.emergencyContactNo}</span></div>
            <div className="info-row"><span className="info-label">Emergency Email Address:</span><span className="info-value">{contactData.emergencyEmail}</span></div>
          </div>
        </div>
      )}

      {/* Insurance Information */}
      <div className="insurance-section">
        <button 
          className="insurance-btn"
          onClick={() => setShowInsurance(!showInsurance)}
        >
          Insurance Information
        </button>
      </div>
      {showInsurance && (
        <div className="insurance-display">
          <div className="insurance-info">
            <p><strong>Insurance Company Name:</strong> {insuranceData.companyName}</p>
            <p><strong>Policy Number:</strong> {insuranceData.policyNumber}</p>
            <p><strong>Plan Type:</strong> {insuranceData.planType}</p>
            <p><strong>Insurance Effective Dates:</strong> {insuranceData.effectiveDates}</p>
            <p><strong>Contact no:</strong> {insuranceData.contactNo}</p>
          </div>
        </div>
      )}

      {/* Allergy */}
      <div className="allergy-section">
        <button 
          className="allergy-btn"
          onClick={() => setShowAllergy(!showAllergy)}
        >
          Allergy
        </button>
      </div>
      {showAllergy && (
        <div className="allergy-display">
          <div className="allergy-grid">
            {allergyData.map((allergy) => (
              <div key={allergy.id} className="allergy-column">
                <h4 className="allergy-title">Allergy {allergy.id}</h4>
                <ul className="allergy-list">
                  <li><strong>Allergen:</strong> {allergy.allergen}</li>
                  <li><strong>Reaction:</strong> {allergy.reaction}</li>
                  <li><strong>Severity:</strong> {allergy.severity}</li>
                  <li><strong>Status:</strong> {allergy.status}</li>
                  <li><strong>Allergy Category:</strong> {allergy.category}</li>
                  <li><strong>Allergy Code:</strong> {allergy.code}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
