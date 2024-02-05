import { NextApiRequest, NextApiResponse } from "next";

let logged_in_status = false;

export async function POST(req: Request) {
  const data = await req.json();

  if (
    data.email_address === "exim@owner.in" &&
    data.password === "Infotech@2023"
  ) {
    logged_in_status = true;
    return Response.json({
      status_code: 200,
      status: true,
      message: "user logged in",
      data: {
        email_address: "exim@owner.in",
        _id: "00",
        user_type: "ORB_OWNER",
        user_rights: "exim-owner",
        org_company_id: "CMP00",
        name: "Name",
        categories: [], // Fix the array declaration here
      },
    });
  }

  return Response.json({
    status_code: 404,
    status: false,
    message: "user not found",
  });
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (logged_in_status) {
    return Response.json({
      status_code: 200,
      status: true,
      message: "user still logged in",
      data: {
        email_address: "exim@owner.in",
        _id: "00",
        user_type: "ORB_OWNER",
        user_rights: "exim-owner",
        org_company_id: "CMP00",
        name: "Name",
        categories: [], // Fix the array declaration here
      },
    });
  } else {
    return Response.json({
      status_code: 404,
      status: false,
      message: "user not logged in",
    });
  }
}
