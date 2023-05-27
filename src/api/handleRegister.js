import axiosInstance from "../lib/axios";



const handleRegister = async (username, email, password) => {
  const result = {
    "isSuccessful": false,
    "message": ""
  }
  
  console.log('onClickSignUp');
  return axiosInstance.post('/auth/signup',
  {
    username: username,
    email: email,
    password: password
  })
  .then((response) => {
    console.log(response.response.data);
    result.isSuccessful = true;
    result.message = response.response.data;
    return result;
  })
  .catch((response) => {
    console.log(response.response);
    result.isSuccessful = false;
    result.message = response.response.data.detail;
    return result;
  });
}

export default handleRegister;
