import setAuthorizationToken from './setAuthorization';
import axiosInstance from "../lib/axios";

const handleLogin = async (email, password) => {
  const result = {
    "isSuccessful": false,
    "message": ""
  }

  return axiosInstance.post('/auth/login',
  {
    email: email,
    password: password
  })
  .then((response) => {
    console.log(response.data);
    const type = response.data.type;
    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;
    setAuthorizationToken(type, accessToken, refreshToken);
    sessionStorage.setItem('nickname', response.data.nickname);
    console.log("로그인 성공!");
    result.isSuccessful = true;
    result.message = response.data.detail;
    return result;
  })
  .catch((error) => {
    console.log("Login Error: " + error.response);
    result.isSuccessful = false;
    result.message = error.response.data.detail;
    result.message = error.response.data.detail;
    return result;
  });
}

export default handleLogin;
