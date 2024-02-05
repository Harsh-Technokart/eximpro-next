"use client";
import React, { useState } from "react";

function ListOfSalesOrders() {
  const [myarr, setMyarr] = useState([
    "sales order 0",
    "sales order 1",
    "sales order 2",
  ]);
  const [salesOrderNumber, setSalesOrderNumber] = useState("");

  const handleAddSalesOrder = () => {
    if (salesOrderNumber.trim() !== "") {
      setMyarr((prevArr) => [...prevArr, salesOrderNumber]);
      setSalesOrderNumber("");
    }
  };

  return (
    <div>
      <input
        type="text"
        name="sales_order_number"
        placeholder="sales order number"
        value={salesOrderNumber}
        onChange={(e) => setSalesOrderNumber(e.target.value)}
      />
      <button type="submit" onClick={handleAddSalesOrder}>
        add sales order
      </button>
      {myarr.map((el) => (
        <p key={el}>{el}</p>
      ))}
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
      mollitia aspernatur sapiente quisquam dicta, odio ipsum laborum ipsa sunt
      qui praesentium in, repudiandae unde ad similique? Eos repudiandae
      molestiae placeat.
    </div>
  );
}

export default ListOfSalesOrders;
