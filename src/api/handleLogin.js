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
    setAuthorizationToken(type, accessToken);
    sessionStorage.setItem('username', response.data.username);
    result.isSuccessful = true;
    result.message = response.data.detail;
    return result;
  })
  .catch((response) => {
    console.log("ERROR: "+response.response);
    result.isSuccessful = false;
    result.message = response.response.data.detail;
    return result;
  });
}

export default handleLogin;
