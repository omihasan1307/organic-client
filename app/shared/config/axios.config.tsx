import { ENV_CONFIG } from "../constant/app.constant";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: ENV_CONFIG.baseApi,
});

// Add token only in browser
axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("authToken");
    console.log(token, "token in axios config");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default axiosInstance;
