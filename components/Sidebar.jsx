"use client";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import CloseIcon from "@mui/icons-material/Close";
import TableRowsIcon from "@mui/icons-material/TableRows";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import Avatar from "@mui/material/Avatar";
import "../assets/CSS/sidebar.styles.css";

function Sidebar(props) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState((currentvalue) => !currentvalue);
  };

  return (
    <div>
      <React.Fragment>
        <TableRowsIcon className="toggle-drawer-icon" onClick={toggleDrawer} />
        <Drawer className="sidebar" open={state} onClose={toggleDrawer}>
          <CloseIcon className="close-icon" onClick={toggleDrawer} />
          <div className="user-details">
            <Avatar className="avatar">{props.userDetails.initial}</Avatar>
            <p className="user-details-name">{props.userDetails.name}</p>
            <p className="user-details-rights">{props.userDetails.rights}</p>
            <p className="user-details-email">{props.userDetails.email}</p>
          </div>
          <List className="sidebar-items">
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
          </List>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default Sidebar;
