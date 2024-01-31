import React from "react";
import Link from "next/link";

export default function Links() {
  return (
    <div>
      <br />
      <br />
      <Link href="/systum-users/exim-owner">Exim Owner</Link>
      <br />
      <Link href="/systum-users/exim-subowner">Exim Sub Owner</Link>
      <br />
      <Link href="/systum-users/exim-superadmin">Exim Super Admin</Link>
      <br />
      <br />
      <br />
      <Link href="/company-users/company-owner">Company A Owner</Link>
      <br />
      <Link href="/company-users/company-subowner">Company A Sub Owner</Link>
      <br />
      <Link href="/company-users/company-superadmin">
        Company A Super Admin
      </Link>
      <br />
      <br />
      <Link href="/company-users/sales">Sales Master</Link>
      <br />
      <Link href="/company-users/sales">Sales Maker</Link>
      <br />
      <Link href="/company-users/sales">Sales Checker</Link>
      <br />
      <Link href="/company-users/logistics">Logistics Master</Link>
      <br />
      <Link href="/company-users/logistics">Logistics Maker</Link>
      <br />
      <Link href="/company-users/logistics">Logistics Checker</Link>
      <br />
      <Link href="/company-users/finance">Finance Master</Link>
      <br />
      <Link href="/company-users/finance">Finance Maker</Link>
      <br />
      <Link href="/company-users/finance">Finance Checker</Link>
      <br />
      <Link href="/company-users/purchase">Purchase Master</Link>
      <br />
      <Link href="/company-users/purchase">Purchase Maker</Link>
      <br />
      <Link href="/company-users/purchase">Purchase Checker</Link>
    </div>
  );
}
