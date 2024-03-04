const backendUrl = process.env.NEXT_PUBLIC_CONFIGURL;
const request_headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.NEXT_PUBLIC_AUTH_HEADER,
  },
  withCredentials: true,
};

export { backendUrl, request_headers };
