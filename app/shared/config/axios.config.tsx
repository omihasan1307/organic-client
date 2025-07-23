import { ENV_CONFIG } from "../constant/app.constant";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: ENV_CONFIG.baseApi,
});

export default axiosInstance;
