import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/IntroPage.css";

export default function IntroPage() {
  const navigate = useNavigate();

  function handleStartClick() {
    navigate("/personal");
  }

  return (
    <div className="intro-container">
      <h1 className="intro-title">Welcome to <span className="highlight">.meForms</span></h1>
      <p className="intro-description">
        Thanks for being here! Every time you interact with our platform, we aim to create a more personalized and meaningful experience — just for <em>you</em>.
      </p>
      <p className="intro-description">
        This form helps us gather a few key details to tailor our communications, perks, and services. Whether it’s sending you personalized updates or ensuring we have accurate info for future interactions, your responses help us do it better.
      </p>
      <p className="intro-description">
        You only need to complete this once — unless something changes.
      </p>
      <p className="intro-duration">🕒 Takes just 3 minutes</p>
      <button className="start-button" onClick={handleStartClick}>Start</button>
      <p className="intro-hint">press <strong>Enter ↵</strong> to begin</p>
    </div>
  );
}
