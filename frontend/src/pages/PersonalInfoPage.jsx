import React from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalInfoPage() {
  const navigate = useNavigate();

  function HandleOnClick() {
    navigate("/question/1");
  }

  return (
    <div>
      <h2>Let's get your personal details.</h2>
      <button onClick={HandleOnClick}>Continue</button>
    </div>
  );
}
