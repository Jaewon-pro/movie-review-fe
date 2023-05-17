import setAuthorizationToken from './setAuthorization'
import axiosInstance from "../lib/axios";

const handleLogin = (email, password) => {
  //axios.post('http://localhost:8080/api/v1/auth/login', // 'http://localhost:8080/api/v1/auth/login'
  axiosInstance.post('/auth/login',
  {
    email: email,
    password: password
  })
  .then((response) => {
    console.log(response.data);
    const type = response.data.type;
    const accessToken = response.data.accessToken;
    setAuthorizationToken(type, accessToken);
  })
  .catch((response) => { console.log(response) });
}

export default handleLogin;
