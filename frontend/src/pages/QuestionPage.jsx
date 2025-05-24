import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../context/FormContext";

import "../styles/QuestionPage.css";

import {
  validateName,
  validateEmail,
  validatePhone,
  validateCountry,
  validatePAN,
  validateAadhar,
  validateUsername,
  validatePassword,
  validateCity,
} from "../utils/validation";

const questions = [
  { name: "firstName", label: "What's your first name?", description: "We need to know what to call you 👋" },
  { name: "lastName", label: "And your last name?", description: "Just for formality (or to shout your full name)" },
  { name: "username", label: "Choose a cool username!", description: "Something unique and memorable 💡" },
  { name: "email", label: "Your email address?", description: "We'll only use it to send good vibes and confirmations." },
  { name: "password", label: "Create a strong password", description: "Keep it secret, keep it safe 🔐" },
  { name: "phone", label: "Your phone number?", description: "Include country code e.g., +91 9876543210 📱" },
  { name: "country", label: "Which country do you live in?", description: "So we know your timezone 🌍" },
  { name: "city", label: "Your city?", description: "We love knowing where our users come from 🏙️" },
  { name: "pan", label: "Your PAN number?", description: "Govt. compliance things 🧾" },
  { name: "aadhar", label: "Your Aadhar number?", description: "Final stretch of ID collection ✅" },
];

export default function QuestionPage() {
  const { step } = useParams();
  const index = parseInt(step, 10);
  const navigate = useNavigate();
  const { answers, updateAnswer } = useForm();
  const question = questions[index];

  const validators = {
    firstName: validateName,
    lastName: validateName,
    username: validateUsername,
    email: validateEmail,
    password: validatePassword,
    phone: validatePhone,
    country: validateCountry,
    city: validateCity,
    pan: validatePAN,
    aadhar: validateAadhar,
  };

  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Calculate progress % for progress bar
  const progressPercent = Math.round(((index + 1) / questions.length) * 100);

  useEffect(() => {
    setInput(answers[question.name] || "");
    setError("");
  }, [question.name, answers, question.name]);

  const handleNext = () => {
    if (!input.trim()) {
      return setError("This field is required. Don’t ghost us 👻");
    }

    const validate = validators[question.name];
    if (validate) {
      const { valid, error: validationError } = validate(input);
      if (!valid) return setError(validationError);
    }

    updateAnswer(question.name, input);
    const nextIndex = index + 1;
    navigate(nextIndex < questions.length ? `/question/${nextIndex}` : "/summary");
  };

  const renderInputField = () => {
    if (question.name === "country") {
      return (
        <select
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`question-input ${error ? "input-error" : ""}`}
        >
          <option value="">Select your country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Germany">Germany</option>
          <option value="Other">Other</option>
        </select>
      );
    }

    if (question.name === "city") {
      return (
        <select
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`question-input ${error ? "input-error" : ""}`}
        >
          <option value="">Select your city</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
        </select>
      );
    }

    if (question.name === "password") {
      return (
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            className={`question-input ${error ? "input-error" : ""}`}
            placeholder="Enter your password"
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      );
    }

    return (
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError("");
        }}
        className={`question-input ${error ? "input-error" : ""}`}
        placeholder="Type your answer here..."
      />
    );
  };

  return (
    <div className="question-container">
      {/* Progress bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
        <p className="progress-text">{`Step ${index + 1} of ${questions.length}`}</p>
      </div>

      <h1 className="question-label">{question.label}</h1>
      <p className="question-description">{question.description}</p>

      {renderInputField()}

      {error && <p className="error-text">{error}</p>}
      <button onClick={handleNext} className="question-button">
        OK
      </button>
      <p className="question-hint">
        press <strong>Enter ↵</strong> to continue
      </p>
    </div>
  );
}
