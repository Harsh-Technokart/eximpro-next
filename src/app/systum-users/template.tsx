"use client";
import Navbar from "../../components/Navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="system-users-page">
      <Navbar />
      {children}
    </div>
  );
}
