import { getAuthToken } from "@/lib/auth";
import { ENV_CONFIG } from "../constant/app.constant";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: ENV_CONFIG.baseApi,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
