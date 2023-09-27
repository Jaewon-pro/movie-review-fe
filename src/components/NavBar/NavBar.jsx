import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Logout from '../login/Logout';
import setAuthorizationToken from '../../api/setAuthorization';

function ShowUserMenu({username}) {
  return (
    <>
      <p>환영합니다! {username}</p>
      <Logout/>
      <Link to="/me"><p>내 프로필 보기</p></Link>
    </>
  );
}

function ShowAuthMenu() {
  return (
    <>
      <Link to="/login"><p>Login</p></Link>
      <Link to="/register"><p>Sign Up</p></Link>
    </>
  );
}

export default function NavBar() {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    setAuthorizationToken();
    const storedNickname = sessionStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, []);

  return (
    <>
      <Link to="/"><h1>무비 리뷰 서비스</h1></Link>
      {
        nickname
          ? <ShowUserMenu username={nickname}/>
          : <ShowAuthMenu/>
      }
      <Link to="/movies">전체 영화 목록 보기</Link>
      <Link to="/movies/123"><p>Movie123 테스트용-없는 영화</p></Link>
      <Link to="/movies/tt1630029"><p>아바타:물의 길 테스트용-있는 영화</p></Link>
    </>
  );
}
