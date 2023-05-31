import axiosInstance from "../lib/axios";

export default function deleteAuthorizationToken() {
  sessionStorage.removeItem('token');
  delete axiosInstance.defaults.headers.common['Authorization'];
}
