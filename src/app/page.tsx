"use client";
import React, { useState } from "react";
import Links from "../../components/Links";
import { Button } from "@mui/material";
import { login } from "../../assets/API/login";
import { useRouter } from "next/navigation";

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

  return (
    <div>
      <form onSubmit={handleUserSignIn}>
        <input
          id="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>

      <p>
        This page should ideally be a login page. If the user does navigate to
        this link and has appropriate cookies, redirect to the appropriate
        dashboard via them login cookies.
      </p>
      <br />
      <p>If the page is unable to redirect, choose your role below:</p>
      <Links />
    </div>
  );
}
