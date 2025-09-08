// src/pages/SecurityQuestions.js
import React, { useState } from "react";
import "./securityQuestions.css"; // ✅ create for styling

const SecurityQuestions = () => {
  const [questions, setQuestions] = useState([
    { question: "What is your favorite color?", answer: "" },
    { question: "What is your father's middle name?", answer: "" },
  ]);

  const availableQuestions = [
    "What is your favorite color?",
    "What is your father's middle name?",
    "What is your mother's maiden name?",
    "What was your first pet's name?",
    "What city were you born in?",
  ];

  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  const handleAnswerChange = (index, value) => {
    const updated = [...questions];
    updated[index].answer = value;
    setQuestions(updated);
  };

  const handleSave = () => {
    alert("Security Questions Saved:\n" + JSON.stringify(questions, null, 2));
  };

  return (
    <div className="content">
      <h2>Security Questions</h2>

      {questions.map((q, index) => (
        <div key={index} className="question-block">
          <h3>Security Question {index + 1}</h3>

          {/* Dropdown */}
          <label className="input-label">Question</label>
          <select
            className="dropdown"
            value={q.question}
            onChange={(e) => handleQuestionChange(index, e.target.value)}
          >
            {availableQuestions.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Answer Input */}
          <label className="input-label">Answer</label>
          <input
            type="text"
            className="input-field"
            value={q.answer}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            placeholder="Enter your answer"
          />
        </div>
      ))}

      {/* Save Button */}
      <div className="form-actions">
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default SecurityQuestions;
