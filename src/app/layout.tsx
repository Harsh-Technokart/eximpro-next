"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checksession } from "../../assets/API/login";
import { rerouter } from "../../assets/js-modules/login-redirect";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const session_status: { status: boolean; data: undefined | object } =
          await checksession();
        if (session_status?.status) {
          rerouter(session_status, router);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [router]);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
