"use client";
import React, { useEffect } from "react";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import Card from "../../../components/landing-page/card";
import "../../../assets/CSS/dashboard.page.css";

export default function EximOwnerDashboard() {
  useEffect(() => {
    console.log(sessionStorage.getItem("creds"));
  });
  return (
    <div className="dashboard">
      <div className="deck-o-cards">
        <Card
          logo={<AccessibleForwardIcon />}
          text="System Users"
          route="./exim-owner/system-users"
        />
        <Card
          text="Naviagtion Link 1"
          logo={<AccessibleForwardIcon />}
          route="./exim-owner/nav01"
        />
        <Card
          text="Naviagtion Link 2"
          logo={<AccessibleForwardIcon />}
          route="./exim-owner/nav02"
        />
      </div>
    </div>
  );
}
