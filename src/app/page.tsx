import React from "react";
import Links from "../../components/Links";

export default function SystemUsers() {
  return (
    <div>
      <p>
        this page should ideally be a login page. if the user does navigate to
        this link and has appropriate cookies, redirect to the appropriate
        dashboard via them login cookies
      </p>
      <br />
      <p>if the page is unable to redirect, choose your role below:</p>

      <Links />
    </div>
  );
}
