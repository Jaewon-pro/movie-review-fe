import axiosInstance from "../lib/axios";

export default function setAuthorizationToken(type, token) {
  const preToken = sessionStorage.getItem('token');
  if (preToken) {
    console.log("이전에 저장된 토큰 확인");
    axiosInstance.defaults.headers.common['Authorization'] = preToken;
  }

  if (type && token) {
    const accessToken = `${type} ${token}`
    sessionStorage.setItem('token', accessToken);
    axiosInstance.defaults.headers.common['Authorization'] = accessToken;    
    console.log(axiosInstance.defaults.headers.common['Authorization']);
  }
}
