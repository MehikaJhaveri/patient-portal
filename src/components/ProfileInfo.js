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

const familyHistoryData = [
  {
    id: 1,
    name: "Jane Finley John",
    dob: "01/01/1960",
    gender: "Female",
    relation: "Mother",
    deceased: "No",
    medicalConditions: "Hypertension, Diabetes"
  },
  {
    id: 2,
    name: "Finley Micheal John",
    dob: "10/10/1960",
    gender: "Male",
    relation: "Father",
    deceased: "No",
    medicalConditions: "Blood Pressure, Diabetes"
  },
  {
    id: 3,
    name: "Theodore Finley John",
    dob: "10/10/2000",
    gender: "Male",
    relation: "Brother",
    deceased: "No",
    medicalConditions: "None"
  }
];

const geneticConditionsData = [
  {
    name: "Jane John",
    relation: "Mother",
    conditions: "Cystic Fibrosis",
    affectedMembers: "None",
    testingResults: "Negative"
  },
  {
    name: "Finley John",
    relation: "Father",
    conditions: "Huntington's Disease",
    affectedMembers: "Paternal Grandfather",
    testingResults: "Positive"
  },
  {
    name: "Theodore John",
    relation: "Brother",
    conditions: "Familial Hypercholesterolemia",
    affectedMembers: "Paternal Aunt",
    testingResults: "Pending"
  }
];

const socialHistoryData = {
  tobacco: {
    currentStatus: "Former Smoker",
    averageDailyConsumption: "10",
    durationOfUse: "10 Years",
    quitDate: "01 June 2020"
  },
  alcohol: {
    currentStatus: "Moderate Drinker",
    averageDailyConsumption: "02",
    typeOfAlcohol: "Red Wine",
    periodOfUse: "5 Years"
  },
  financialResources: {
    incomeLevel: "Moderate",
    employmentStatus: "Employed",
    financialSupport: "None"
  },
  education: {
    highestLevel: "BMS"
  },
  physicalActivity: {
    frequency: "03 times a week",
    typeOfExercise: "Jogging & Strength Training",
    duration: "30 Minutes",
    consistency: "Regular"
  },
  stress: {
    perceivedLevel: "Moderate",
    majorStress: ["Work Deadlines", "Family Responsibilities", "Financial Concerns"],
    copingMechanism: "Meditation: 10 Min Daily, Exercise: 3 times a week"
  },
  socialIsolation: {
    isolationStatus: "Low",
    socialSupport: "Supportive Family",
    frequencyOfInteractions: "In personal Gatherings once a week, Virtual Meetups: Twice a Week, Phone Calls: Daily"
  },
  exposureToViolence: {
    typeOfViolence: "",
    dateOfLastExposure: "",
    supportToIntervention: ""
  },
  genderIdentity: "Male",
  sexualOrientation: "Straight",
  nutrients: {
    dietaryPreference: "",
    supplementaryUsage: "No"
  }
};

const ProfileInfo = () => {
  const [showDemographics, setShowDemographics] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showInsurance, setShowInsurance] = useState(false);
  const [showAllergy, setShowAllergy] = useState(false);
  const [showFamilyHistory, setShowFamilyHistory] = useState(false);
  const [showSocialHistory, setShowSocialHistory] = useState(false);

  return (
    <div>      
      <div className="profile-section">
        {/* Header with Settings, Search, and Circle */}
        <div className="profile-header">
          <h1 className="settings-title">Settings</h1>
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-bar"
            />
          </div>
          <div className="profile-circle"></div>
        </div>

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

        {/* Family History */}
        <div className="family-history-section">
          <button
            className="family-history-btn"
            onClick={() => setShowFamilyHistory(!showFamilyHistory)}
          >
            Family History
          </button>
        </div>
        {showFamilyHistory && (
          <div className="family-history-display">
            <div className="family-members-grid">
              {familyHistoryData.map((member) => (
                <div key={member.id} className="family-member">
                  <h4 className="family-member-title">Family Member {member.id}</h4>
                  <div className="info-grid">
                    <div className="info-row"><span className="info-label">Name:</span><span className="info-value">{member.name}</span></div>
                    <div className="info-row"><span className="info-label">DOB:</span><span className="info-value">{member.dob}</span></div>
                    <div className="info-row"><span className="info-label">Gender:</span><span className="info-value">{member.gender}</span></div>
                    <div className="info-row"><span className="info-label">Relation:</span><span className="info-value">{member.relation}</span></div>
                    <div className="info-row"><span className="info-label">Deceased:</span><span className="info-value">{member.deceased}</span></div>
                    <div className="info-row"><span className="info-label">Medical Conditions:</span><span className="info-value">{member.medicalConditions}</span></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="genetic-conditions-section">
              <h4>Genetic Conditions</h4>
              <div className="genetic-conditions-table">
                <div className="table-header">
                  <span>Name</span>
                  <span>Relation</span>
                  <span>Conditions</span>
                  <span>Affected Members</span>
                  <span>Testing Results</span>
                </div>
                {geneticConditionsData.map((condition, index) => (
                  <div key={index} className="table-row">
                    <span>{condition.name}</span>
                    <span>{condition.relation}</span>
                    <span>{condition.conditions}</span>
                    <span>{condition.affectedMembers}</span>
                    <span>{condition.testingResults}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Social History */}
        <button
          className="social-history-btn"
          onClick={() => setShowSocialHistory(!showSocialHistory)}
        >
          Social History
        </button>

        {showSocialHistory && (
          <div className="social-history-display">
            <div className="social-history-grid">
              <div className="social-history-column">
                <h4>Tobacco Use</h4>
                <div className="info-grid">
                  <div className="info-row"><span className="info-label">Current Status:</span><span className="info-value">{socialHistoryData.tobacco.currentStatus}</span></div>
                  <div className="info-row"><span className="info-label">Average Daily Consumption:</span><span className="info-value">{socialHistoryData.tobacco.averageDailyConsumption}</span></div>
                  <div className="info-row"><span className="info-label">Duration of Use:</span><span className="info-value">{socialHistoryData.tobacco.durationOfUse}</span></div>
                  <div className="info-row"><span className="info-label">Quit Date:</span><span className="info-value">{socialHistoryData.tobacco.quitDate}</span></div>
                </div>
                
                <h4>Financial Resources</h4>
                <div className="info-grid">
                  <div className="info-row"><span className="info-label">Income Level:</span><span className="info-value">{socialHistoryData.financialResources.incomeLevel}</span></div>
                  <div className="info-row"><span className="info-label">Employment Status:</span><span className="info-value">{socialHistoryData.financialResources.employmentStatus}</span></div>
                  <div className="info-row"><span className="info-label">Financial Support:</span><span className="info-value">{socialHistoryData.financialResources.financialSupport}</span></div>
                </div>
                
                <h4>Physical Activity</h4>
                <div className="info-grid">
                  <div className="info-row"><span className="info-label">Frequency:</span><span className="info-value">{socialHistoryData.physicalActivity.frequency}</span></div>
                  <div className="info-row"><span className="info-label">Type of Exercise:</span><span className="info-value">{socialHistoryData.physicalActivity.typeOfExercise}</span></div>
                  <div className="info-row"><span className="info-label">Duration:</span><span className="info-value">{socialHistoryData.physicalActivity.duration}</span></div>
                  <div className="info-row"><span className="info-label">Consistency:</span><span className="info-value">{socialHistoryData.physicalActivity.consistency}</span></div>
                </div>
                
                <h4>Social Isolation & Connection</h4>
                <div className="info-grid">
                  <div className="info-row"><span className="info-label">Isolation Status:</span><span className="info-value">{socialHistoryData.socialIsolation.isolationStatus}</span></div>
                  <div className="info-row"><span className="info-label">Social Support:</span><span className="info-value">{socialHistoryData.socialIsolation.socialSupport}</span></div>
                  <div className="info-row"><span className="info-label">Frequency of Social Interactions:</span><span className="info-value">{socialHistoryData.socialIsolation.frequencyOfInteractions}</span></div>
                </div>
              </div>
              
              <div className="social-history-column">
                <h4>Alcohol Use</h4>
                <div className="info-grid">
                  <div className="info-row"><span className="info-label">Current Status:</span><span className="info-value">{socialHistoryData.alcohol.currentStatus}</span></div>
                  <div className="info-row"><span className="info-label">Average Daily Consumption:</span><span className="info-value">{socialHistoryData.alcohol.averageDailyConsumption}</span></div>
                  <div className="info-row"><span className="info-label">Type of Alcohol:</span><span className="info-value">{socialHistoryData.alcohol.typeOfAlcohol}</span></div>
                  <div className="info-row"><span className="info-label">Period of Use:</span><span className="info-value">{socialHistoryData.alcohol.periodOfUse}</span></div>
                </div>
                
                <h4>Education</h4>
                <div className="info-grid">
                  <div className="info-row"><span className="info-label">Highest Level of Education:</span><span className="info-value">{socialHistoryData.education.highestLevel}</span></div>
                </div>
                
                <h4>Stress</h4>
                <div className="info-grid">
                  <div className="info-row"><span className="info-label">Perceived Stress Level:</span><span className="info-value">{socialHistoryData.stress.perceivedLevel}</span></div>
                  <div className="info-row"><span className="info-label">Major Stress:</span><span className="info-value">{socialHistoryData.stress.majorStress.join(", ")}</span></div>
                  <div className="info-row"><span className="info-label">Coping Mechanism:</span><span className="info-value">{socialHistoryData.stress.copingMechanism}</span></div>
                </div>
                
                <h4>Exposure to Violence</h4>
                <div className="info-grid">
                  <div className="info-row"><span className="info-label">Type of Violence:</span><span className="info-value">{socialHistoryData.exposureToViolence.typeOfViolence || "None"}</span></div>
                  <div className="info-row"><span className="info-label">Date of Last Exposure:</span><span className="info-value">{socialHistoryData.exposureToViolence.dateOfLastExposure || "N/A"}</span></div>
                  <div className="info-row"><span className="info-label">Support to Intervention Received:</span><span className="info-value">{socialHistoryData.exposureToViolence.supportToIntervention || "N/A"}</span></div>
                </div>
                
                <h4>Gender Identity</h4>
                <div className="info-grid">
                  <div className="info-row"><span className="info-label">Gender Identity:</span><span className="info-value">{socialHistoryData.genderIdentity}</span></div>
                </div>
                
                <h4>Sexual Orientation</h4>
                <div className="info-grid">
                  <div className="info-row"><span className="info-label">Sexual Orientation:</span><span className="info-value">{socialHistoryData.sexualOrientation}</span></div>
                </div>
                
                <h4>Nutrients History</h4>
                <div className="info-grid">
                  <div className="info-row"><span className="info-label">Dietary Preference:</span><span className="info-value">{socialHistoryData.nutrients.dietaryPreference || "Not specified"}</span></div>
                  <div className="info-row"><span className="info-label">Supplementary Usage:</span><span className="info-value">{socialHistoryData.nutrients.supplementaryUsage}</span></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;