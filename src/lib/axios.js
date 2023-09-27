import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = process.env.REACT_APP_API_DOMAIN;
axiosInstance.defaults.headers.common["Accept"] = "application/json";

export default axiosInstance;
