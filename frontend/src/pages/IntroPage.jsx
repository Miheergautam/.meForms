import React from "react";
import { useNavigate } from "react-router-dom";

export default function IntroPage() {
  const navigate = useNavigate();

  function HandleOnClick() {
    navigate("/personal");
  }

  return (
    <div>
      <h1>Welcome to .meForms</h1>
      <button onClick={HandleOnClick}>Start</button>
    </div>
  );
}
