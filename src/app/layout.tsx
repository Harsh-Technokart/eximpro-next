"use client";
import React, { useEffect } from "react";
import { checksession } from "../../assets/API/login";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const session_status: { status: boolean; data: undefined | object } =
          await checksession();
        if (session_status?.status) {
          // Your logic here
        }
      } catch (error) {
        // Handle errors if needed
      }
    };

    fetchData();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
