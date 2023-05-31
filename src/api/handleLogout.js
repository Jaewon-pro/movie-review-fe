import deleteAuthorizationToken from './deleteAuthorization';

const handleLogout = () => {
  console.log("로그아웃 시작");
  sessionStorage.removeItem('username');
  deleteAuthorizationToken(); // 기존의 토큰 지우기
}

export default handleLogout;
