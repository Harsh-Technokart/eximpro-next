"use client";
import React, { useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";
import { logout, checksession } from "../assets/API/login";
import { rerouter } from "../assets/js-modules/login-redirect";
import { user_type_formatter } from "../assets/js-modules/data-formatter";
import Sidebar from "./Sidebar";
import "../assets/CSS/navbar.component.css";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter()
  const [credentials, setCredentials] = useState({});
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    setCredentials(() => {
      const storedCredentials = sessionStorage.getItem("creds");
      return storedCredentials ? JSON.parse(storedCredentials) : null;
    })
    setUserDetails({
      ...credentials,
      user_type: user_type_formatter(credentials?.user_type || ""),
      get initial() {
        return this.name?.split("")[0] || "";
      },
    })
  }, [credentials, userDetails])

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
            <>{userDetails.user_type}</>
            <br />
            <>{userDetails.email_address}</>
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
              sx={{ bgcolor: isHovered ? "#282622" : "#a5d8ff" }}
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
