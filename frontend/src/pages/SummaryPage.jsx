import React from "react";
import { useForm } from "../context/FormContext";
import "../styles/SummaryPage.css";
import { useNavigate } from "react-router-dom";

export default function SummaryPage() {
  const { answers, resetForm } = useForm();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Submitted Data:", answers);
    alert("Data submitted! Check the console for details.");

    resetForm(); 

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="summary-container">
      <h1 className="summary-title">🎉 You're all set!</h1>
      <p className="summary-subtitle">
        Here’s a quick look at what you’ve shared with us:
      </p>

      <div className="summary-card">
        {Object.entries(answers).map(([key, value]) => (
          <div key={key} className="summary-item">
            <span className="summary-label">{formatLabel(key)}</span>
            <span className="summary-value">{value}</span>
          </div>
        ))}
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>

      <p className="summary-footer">
        Thanks for completing the form. We appreciate you taking the time! 💙
      </p>
    </div>
  );
}

function formatLabel(key) {
  const labels = {
    name: "Full Name",
    email: "Email",
    phone: "Phone Number",
    country: "Country",
    pan: "PAN Number",
    aadhar: "Aadhar Number",
  };
  return labels[key] || key;
}