"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";
import { logout, checksession } from "../assets/API/login";
import { rerouter } from "../assets/js-modules/login-redirect";
import "../assets/CSS/navbar.styles.css";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter()
  //! these details should ideally come from the session storage
  const userDetails = {
    name: "Javed",
    email: "javed.jeffery@eximpro.com",
    rights: "Exim Owner",
    get initial() {
      return this.name.split("")[0];
    },
  };
  let timeout;
  return (
    <div className="navbar-parent">
      <div className="navbar">
        <Sidebar
          userDetails={userDetails}
          sidebarItems={[
            { text: "item-0" },
            { text: "item-1" },
            { text: "item-2" },
          ]}
        />
        <div className="right-wing">
          <div className="user-details">
            <>{userDetails.name}</>
            <br />
            <>{userDetails.rights}</>
            <br />
            <>{userDetails.email}</>
            <br />
          </div>
          <Tooltip title="Logout">
            <Avatar
              onMouseEnter={() => {
                timeout = setTimeout(() => setIsHovered(true), 500);
              }}
              onMouseLeave={() => {
                clearTimeout(timeout);
                setIsHovered(false);
              }}
              onClick={async () => {
                if (isHovered) {
                  console.log("Logging out...");
                  await logout()
                  const session_status = await checksession()
                  rerouter(session_status, router)
                }
              }}
              className={isHovered ? "avatar-hovered" : "avatar-unhovered"}
            >
              {isHovered ? (
                <LogoutIcon className="logout" />
              ) : (
                <p className="logout">{userDetails.initial}</p>
              )}
            </Avatar>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
