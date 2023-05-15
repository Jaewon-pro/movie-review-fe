import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

export const authApi = axios.create({
  baseURL: BASE_URL+"/auth",
  //withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";
