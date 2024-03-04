"use client";
import React, { useEffect, useState } from "react";
import Topbar from "@/components/system-users/exim-owner/topbar";
import { getSystemUsers } from "@/assets/API/system-users";
import "@/assets/CSS/system-users.page.css";
import Table from "@/components/system-users/exim-owner/table";

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

function SystemUsers() {
  const [listOfSystemUser, setListOfSystemUser] = useState<
    Array<SystemUserObject>
  >([]);
  const systemList = async () => {
    const listofusers = await getSystemUsers();
    if (listofusers.status) {
      setListOfSystemUser(listofusers.data.docs);
    }
  };
  useEffect(() => {
    systemList();
  }, []);
  useEffect(() => {
    console.log("listOfSystemUser:", listOfSystemUser);
  }, []);
  return (
    <div>
      <Topbar />
      <Table listOfSystemUser={listOfSystemUser} />
    </div>
  );
}

export default SystemUsers;
