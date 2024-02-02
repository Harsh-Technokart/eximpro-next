import React from "react";

function SystemUsers() {
  return (
    <div>
      <div className="system-users-topbar">
        <input type="text" className="search" />
        <select name="filter-00" id="">
          <option value="value-00">option 00</option>
          <option value="value-01">option 01</option>
          <option value="value-02">option 02</option>
        </select>
        <select name="filter-01" id="">
          <option value="value-00">option 00</option>
          <option value="value-01">option 01</option>
          <option value="value-02">option 02</option>
        </select>
        <select name="filter-02" id="">
          <option value="value-00">option 00</option>
          <option value="value-01">option 01</option>
          <option value="value-02">option 02</option>
        </select>
        <button>Create New</button>
      </div>
    </div>
  );
}

export default SystemUsers;
