import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

export const authApi = axios.create({
  baseURL: BASE_URL+"/auth",
  //withCredentials: true,
});

export const movieApi = axios.create({
  baseURL: BASE_URL+"/movies",
  //withCredentials: true,
});

export const reviewApi = axios.create({
  baseURL: BASE_URL+"/reviews",
  //withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";
