import setAuthorizationToken from './setAuthorization';
import axiosInstance from "../lib/axios";

const handleLogin = async (email, password) => {
  
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
    return true;
  })
  .catch((response) => {
    console.log(response);
    return false;
  });
}

export default handleLogin;
