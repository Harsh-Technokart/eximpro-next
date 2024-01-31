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
    if (res.status) {
      console.log("res", res);
      switch (res.data.user_type) {
        case "ORB_OWNER":
          router.push("/systum-users/exim-owner");
          break;
        case "ORB_SUB_OWNER":
          router.push("/systum-users/exim-subowner");
          break;
        case "ORB_SUPER_ADMIN":
          router.push("/systum-users/exim-superadmin");
          break;
        case "COMPANY_OWNER":
          router.push("/company-users/company-owner");
          break;
        case "COMPANY_SUPER_ADMIN":
          router.push("/company-users/company-superadmin");
          break;
        case "COMPANY_SUB_OWNER":
          router.push("/company-users/company-subowner");
          break;
        case "COMPANY_FINANCE":
          router.push("/company-users/finance");
          break;
        case "COMPANY_SALES":
          router.push("/company-users/sales");
          break;
        case "COMPANY_LOGISTICS":
          router.push("/company-users/logistics");
          break;
        case "COMPANY_PURCHASE":
          router.push("/company-users/purchase");
          break;
        case "COMPANY_HEDGER":
          router.push("/company-users/hedger");
          break;
        default:
          router.push("/404");
          break;
      }
      if (res.data.user_type === "ORB_OWNER") {
      }
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
