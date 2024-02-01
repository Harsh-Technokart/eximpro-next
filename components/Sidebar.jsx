"use client";
import React from "react";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import CloseIcon from "@mui/icons-material/Close";
import TableRowsIcon from "@mui/icons-material/TableRows";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { logout } from "../assets/API/login";
import { useRouter } from "next/navigation";
import "../assets/CSS/sidebar.styles.css";

function Sidebar(props) {
  const [state, setState] = React.useState(false);
  const router = useRouter()
  const toggleDrawer = () => {
    setState((currentvalue) => !currentvalue);
  };

  return (
    <div>
      <React.Fragment>
        <TableRowsIcon className="toggle-drawer-icon" onClick={toggleDrawer} />
        <Drawer className="sidebar" open={state} onClose={toggleDrawer} >
          <CloseIcon className="close-icon" onClick={toggleDrawer} />
          <div className="user-details">
            <Avatar className="avatar">{props.userDetails.initial}</Avatar>
            <p className="user-details-name">{props.userDetails.name}</p>
            <p className="user-details-rights">{props.userDetails.user_type}</p>
            <p className="user-details-email">{props.userDetails.email_address}</p>
          </div>
          <ul className="sidebar-items" >
            {props.sidebarItems.map((list_item, index) => (
              <ListItem className="list-item" key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {list_item.icon ? (
                      list_item.icon
                    ) : (
                      <AccessibleForwardIcon />
                    )}
                  </ListItemIcon>
                  <p className="list-item-text">{list_item.text}</p>
                </ListItemButton>
              </ListItem>
            ))}
          </ul>
          <ListItemButton onClick={
            async () => {
              console.log("Logging out...");
              await logout().then(() => {
                router.push("/");
              })
            }
          } >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <p className="list-item-text">Logout</p>
          </ListItemButton>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default Sidebar;
