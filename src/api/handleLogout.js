import axiosInstance from "../lib/axios";

const handleLogout = () => {
  console.log("로그아웃 시작");
  sessionStorage.removeItem('nickname');
  deleteAuthorizationToken(); // 기존의 토큰 지우기
}


function deleteAuthorizationToken() {
  const refreshToken = sessionStorage.getItem('refreshToken');
  const body = {
    refreshToken: refreshToken
  };
  
  axiosInstance.post('/accounts/logout', body)
    .then((response) => {
      console.log(response);
      sessionStorage.removeItem('token');
      delete axiosInstance.defaults.headers.common['Authorization'];
    })
    .catch((error) => {
      console.log("Logout Error: " + error.response);
  });
}

export default handleLogout;
