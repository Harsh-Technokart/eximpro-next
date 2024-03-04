import React from "react";

interface SystemUserObject {
  _id: string;
  name: string;
  email_address: string;
  active: boolean;
  mobile_number: string;
  password: string;
  password_set: boolean;
  approval_status: boolean;
  action_taken_time: Date | null;
  password_set_link: string | undefined;
  password_reset_link: string | undefined;
  org_company_id: string;
  user_type: string;
  user_rights: string | null;
  user_status: string;
  creation_time: Date;
  emp_id: string;
  createdAt: Date;
  updatedAt: Date;
}

function Table(props: { listOfSystemUser: Array<SystemUserObject> }) {
  return (
    <table className="table">
      <thead className="thead">
        <tr className="theadtr">
          <th className="th">Serial Number</th>
          <th className="th">Name</th>
          <th className="th">Email Address</th>
          <th className="th">Mobile Number</th>
          <th className="th">Created At</th>
          <th className="th">Approved At</th>
          <th className="th">User Status</th>
          <th className="th">User Type</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {props.listOfSystemUser.map((el, ind) => (
          <tr className="tr" key={ind}>
            <td className="td">{ind + 1}</td>
            <td className="td">{el.name}</td>
            <td className="td">{el.email_address}</td>
            <td className="td">{el.mobile_number}</td>
            <td className="td">
              {el.createdAt.toString().split("T").join(" : ").split(".")[0]}
            </td>
            <td className="td">
              {el.updatedAt.toString().split("T").join(" : ").split(".")[0]}
            </td>
            <td className="td">{el.user_status}</td>
            <td className="td">{el.user_type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
