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

interface Credentials {
  email_address: string;
  _id: string;
  org_company_id: string;
  user_rights: any;
  user_type: string;
  name: string;
  categories: Array<string>;
}

interface UserDetails {
  email_address: string;
  _id: string;
  org_company_id: string;
  user_rights: any;
  user_type: string;
  name: string;
  categories: Array<string>;
  initial: string;
}

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<UserDetails>({
    email_address: "name@mail.com",
    _id: "",
    org_company_id: "",
    user_rights: null,
    user_type: "",
    name: "Name",
    categories: [],
    initial: "I",
  });

  const checkSessionCall = async () => {
    const sessionstatus: { status: boolean; data: Credentials } =
      await checksession();
    if (sessionstatus.status) {
      setTimeout(() => {
        const initial = sessionstatus.data.name?.split("")[0] || "";
        setUserDetails({
          ...sessionstatus.data,
          user_type: user_type_formatter(sessionstatus.data?.user_type || ""),
          initial,
        });
      }, 500);
    }
  };

  useEffect(() => {
    checkSessionCall();
  }, []);

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
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              onClick={async () => {
                if (isHovered) {
                  console.log("Logging out...");
                  await logout();
                  const session_status = await checksession();
                  rerouter(session_status, router);
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
