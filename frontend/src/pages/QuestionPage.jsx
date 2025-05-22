import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../context/FormContext";

const questions = [
  { label: "name", question: "What is your name?" },
  { label: "email", question: "What is your Email?" },
  { label: "phone Number", question: "What is your phoneNumber?" },
  { label: "country", question: "What is your country?" },
  { label: "pan", question: "What is your PAN Number?" },
  { label: "aadhar", question: "What is your Aadhar Number?" },
];

export default function QuestionPage() {
  const { step } = useParams();
  const index = parseInt(step);
  const navigate = useNavigate();

  const { answers, updateAnswer } = useForm();
  const question = questions[index];

  const [input, setInput] = useState(answers[question.name] || "");
  const [error, setError] = useState("");

  function HandleNext(){
    if(!input.trim()){
        return setError('The Field is Required');
    }

    updateAnswer(question.name,input);
    if(index+1 < questions.length){
        navigate(`/question/${index+1}`);
    }else{
        navigate('/summary')
    }
  }

  return (
    <div>
      <h1>{question.label}</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError("");
        }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={HandleNext} >OK</button>
    </div>
  );
}
