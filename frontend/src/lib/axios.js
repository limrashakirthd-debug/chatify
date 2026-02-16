import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL:
  //   import.meta.env.MODE === "development"
  //     ? "http://localhost:3000/api"
  //     : "/api",
  // withCredentials: true,

  // chatgpt
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
  withCredentials: true, // needed if your backend uses cookies
  // chatgpt
});
