import axios from "axios";

export const login = async (creds: {
  email_or_employee: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      `http://localhost:3001/server/login`,
      {
        email_address: creds.email_or_employee,
        password: creds.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic TjhYUVRlZTZIQ1hqR2tEam1NQUx6SkFReVFlS2ZHODg6bW1qUUgxYkhHSnJjZzdWYw==",
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
