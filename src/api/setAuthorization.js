import axiosInstance from "../lib/axios";

export default function setAuthorizationToken(type, token) {
  if (type && token) {
    axiosInstance.defaults.headers.common['Authorization'] = `${type} ${token}`;
    console.log(axiosInstance.defaults.headers.common['Authorization'])
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
}
