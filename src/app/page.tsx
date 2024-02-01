"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { login, checksession } from "../../assets/API/login";
import { useRouter } from "next/navigation";
import { rerouter } from "../../assets/js-modules/login-redirect";

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
    </div>
  );
}
