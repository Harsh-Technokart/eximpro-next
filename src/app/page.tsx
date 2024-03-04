import React from "react";
import LoginForm from "../components/login-page/LoginForm";
import "../assets/CSS/login.page.css";

export default function SystemUsers() {
  return (
    <div className="page">
      <div className="login-form-div">
        <LoginForm />
      </div>
      <div className="filler">
        <h1 className="filler-text">Exim Pro App</h1>
        <h3 className="filler-sub-text">Feature 0</h3>
        <h3 className="filler-sub-text">Feature 1</h3>
        <h3 className="filler-sub-text">Feature 2</h3>
      </div>
    </div>
  );
}
