import axios from "axios";
import { backendUrl, request_headers } from "./setup.variables";

export const login = async (creds: {
  email_or_employee: string;
  password: string;
}): Promise<{
  status_code: number;
  status: boolean;
  data: {
    email_address: string;
    _id: string;
    user_type: string | null | undefined;
    user_rights: string | null | undefined;
    org_company_id: string | null | undefined;
    name: string | null | undefined;
    categories: Array<string>;
  };
}> => {
  try {
    const response = await axios.post(
      `${backendUrl}/server/login`,
      {
        email_address: creds.email_or_employee,
        password: creds.password,
      },
      request_headers
    );
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const checksession = async (): Promise<{
  status: boolean;
  data: object | undefined;
}> => {
  try {
    const response: { status: boolean; data: undefined | object } =
      await axios.get(`${backendUrl}/server/session`, request_headers);
    return {
      status: response.status,
      data: response.data ? response.data : undefined,
    };
  } catch (error) {
    console.log(error);
    return { status: false, data: error ? error : undefined };
  }
};

export const logout = async () => {
  try {
    const response = await axios.delete(
      `${backendUrl}/session`,
      request_headers
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
