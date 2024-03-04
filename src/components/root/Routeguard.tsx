"use client";
import React, { useEffect, useMemo, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { rerouter } from "../../assets/js-modules/login-redirect";
import { checksession } from "../../assets/API/login";
import { routeguard_utils } from "../../assets/js-modules/routeguard-utils";

interface UserTypesPaths {
  [key: string]: string;
}

function Routeguard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const userTypesPaths: UserTypesPaths = useMemo(routeguard_utils, []);
  const current_pathname = usePathname();

  const session_check = useCallback(async () => {
    const session_status = await checksession();
    if (session_status.status) {
      sessionStorage.setItem("creds", JSON.stringify(session_status.data));
      const userTypePaths = userTypesPaths[session_status.data.user_type];
      if (userTypePaths) {
        const allowedPaths = userTypePaths.split("/");
        const currentPaths = current_pathname.split("/");
        const boolarray = allowedPaths.map(
          (path, index) => path === currentPaths[index]
        );
        if (!boolarray.every(Boolean)) {
          rerouter(session_status, router);
        }
      }
    }
    console.log(current_pathname);
  }, [current_pathname, router]);

  useEffect(() => {
    session_check();
  }, [session_check]);

  return <>{children}</>;
}

export default Routeguard;
