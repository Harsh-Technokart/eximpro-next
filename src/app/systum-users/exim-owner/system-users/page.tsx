import React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import "../../../../assets/CSS/system-users.page.css";

function SystemUsers() {
  return (
    <div>
      <div className="system-users-topbar">
        <label className="search">
          search system users
          <input type="text" className="search-box" />
        </label>
        <label className="select">
          filter by approval
          <Select
            defaultValue="value-00"
            className="select-dropdown"
            name="filter-00"
            id=""
          >
            <Option value="value-00">option 00</Option>
            <Option value="value-01">option 01</Option>
            <Option value="value-02">option 02</Option>
          </Select>
        </label>
        <label className="select">
          filter by approval
          <Select
            defaultValue="value-00"
            className="select-dropdown"
            name="filter-00"
            id=""
          >
            <Option value="value-00">option 00</Option>
            <Option value="value-01">option 01</Option>
            <Option value="value-02">option 02</Option>
          </Select>
        </label>
        <label className="select">
          filter by approval
          <Select
            defaultValue="value-00"
            className="select-dropdown"
            name="filter-00"
            id=""
          >
            <Option value="value-00">option 00</Option>
            <Option value="value-01">option 01</Option>
            <Option value="value-02">option 02</Option>
          </Select>
        </label>
        <button className="create-new-button">Create New</button>
      </div>
    </div>
  );
}

export default SystemUsers;
