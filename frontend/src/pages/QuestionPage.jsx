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
  validateAadhar
} from "../utils/validation";



const questions = [
  {
    name: "name",
    label: "Hey friend! What's your full name?",
    description: "We need something to call you — preferably the real you, not your alter ego 👀",
  },
  {
    name: "email",
    label: "What's your magical email address?",
    description: "We'll only use it to send good vibes (and maybe a confirmation or two).",
  },
  {
    name: "phone",
    label: "Can we have your digits?",
    description: "Your phone number, silly! So we can text you memes (just kidding... maybe).",
  },
  {
    name: "country",
    label: "Where in the world are you?",
    description: "Let us know your country – purely for timezone respect and curiosity 🌍",
  },
  {
    name: "pan",
    label: "What's your PAN Number?",
    description: "Okay, serious business here. Government wants to know you're legit 🧐",
  },
  {
    name: "aadhar",
    label: "And your Aadhar Number, please?",
    description: "Last bit of official stuff — we promise! 🔐",
  },
];

export default function QuestionPage() {
  const { step } = useParams();
  const index = parseInt(step, 10);
  const navigate = useNavigate();

  const { answers, updateAnswer } = useForm();
  const question = questions[index];

  const validators = {
    name: validateName,
    email: validateEmail,
    phone: validatePhone,
    country: validateCountry,
    pan: validatePAN,
    aadhar: validateAadhar,
  };

  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setInput(answers[question.name] || "");
    setError("");
  }, [question.name]);

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

  return (
    <div className="question-container">
      <h1 className="question-label">{question.label}</h1>
      <p className="question-description">{question.description}</p>
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
      {error && <p className="error-text">{error}</p>}
      <button onClick={handleNext} className="question-button">
        OK
      </button>
      <p className="question-hint">press <strong>Enter ↵</strong> to continue</p>
    </div>
  );
}
