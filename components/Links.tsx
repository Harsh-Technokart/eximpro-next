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
      <Link href="/company-users/company-sales-master">Sales Master</Link>
      <br />
      <Link href="/company-users/company-sales-maker">Sales Maker</Link>
      <br />
      <Link href="/company-users/company-sales-checker">Sales Checker</Link>
      <br />
      <Link href="/company-users/company-logistics-master">
        Logistics Master
      </Link>
      <br />
      <Link href="/company-users/company-logistics-maker">Logistics Maker</Link>
      <br />
      <Link href="/company-users/company-logistics-checker">
        Logistics Checker
      </Link>
      <br />
      <Link href="/company-users/company-finance-master">Finance Master</Link>
      <br />
      <Link href="/company-users/company-finance-maker">Finance Maker</Link>
      <br />
      <Link href="/company-users/company-finance-checker">Finance Checker</Link>
      <br />
      <Link href="/company-users/company-purchase-master">Purchase Master</Link>
      <br />
      <Link href="/company-users/company-purchase-maker">Purchase Maker</Link>
      <br />
      <Link href="/company-users/company-purchase-checker">
        Purchase Checker
      </Link>
    </div>
  );
}
