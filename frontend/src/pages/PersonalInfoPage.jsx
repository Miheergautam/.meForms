import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PersonalInfoPage.css";

export default function PersonalInfoPage() {
  const navigate = useNavigate();

  function handleContinueClick() {
    navigate("/question/0");
  }

  return (
    <div className="personal-info-container">
      <h1 className="personal-info-title">Time to get personal 👤</h1>
      <p className="personal-info-text">
        We’d love to know a bit more about you. Just the essentials — like your name, email, and a few things to personalize your journey.
      </p>
      <p className="personal-info-text">
        Don’t worry, it’s short and sweet. Plus, everything stays safe and sound with us 🔐
      </p>
      <button className="continue-button" onClick={handleContinueClick}>Continue</button>
      <p className="personal-info-hint">press <strong>Enter ↵</strong> to continue</p>
    </div>
  );
}
