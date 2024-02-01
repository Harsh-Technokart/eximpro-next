const backendUrl = process.env.NEXT_PUBLIC_CONFIGURL;
const Authorization = process.env.NEXT_PUBLIC_AUTH_HEADER;
const request_headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization,
  },
  withCredentials: true,
};

export { backendUrl, request_headers };
