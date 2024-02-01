"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { login, checksession } from "../../assets/API/login";
import { useRouter } from "next/navigation";
import { rerouter } from "../../assets/js-modules/login-redirect";
import "../../assets/CSS/login.page.css";

export default function SystemUsers() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleUserSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const creds = {
      email_or_employee: email,
      password: password,
    };
    const res = await login(creds);
    sessionStorage.setItem("creds", JSON.stringify(res.data));
    if (res.status) {
      rerouter(res, router);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const session_status: { status: boolean; data: undefined | object } =
          await checksession();
        rerouter(session_status, router);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page">
      <div className="login-form-div">
        <form className="login-form-itself" onSubmit={handleUserSignIn}>
          <h1 className="filler-over-login-page">Exim Pro</h1>
          <h3 className="login-form-heading">Login</h3>
          <input
            className="login-textbox"
            id="email"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-textbox"
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="submit-button-coverup">
            <Button type="submit" className="submit-button" variant="contained">
              Submit
            </Button>
          </div>
        </form>
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
