import axios from "axios";
import { request_headers, backendUrl } from "./setup.variables";

const getSystemUsers = async () => {
  try {
    const list_of_system_users = await axios.get(
      `${backendUrl}/system_user`,
      request_headers
    );
    return list_of_system_users.data;
  } catch (error) {
    console.log(error);
  }
};

export { getSystemUsers };
