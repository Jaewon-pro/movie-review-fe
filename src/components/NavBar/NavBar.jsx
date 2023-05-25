import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../login/Logout';

function ShowUserMenu({ username }) {
  return (
    <>
      <p>환영합니다! {username}</p>
      <Logout />
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
  const [username, setUsername] = useState('');

  const handleStorageChange = (event) => {
    console.log('Storage changed:', event.key, event.newValue);
    if (event.key === 'username') {
      console.log("!!!!!!!!!")
      setUsername(event.newValue);
    }
  };

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  });

  return (
    <>
    {
      username
      ? <ShowUserMenu username={username}/>
      : <ShowAuthMenu />
    }
      <Link to="/movies/123"><p>Movie123</p></Link>
      <Link to="/movies/tt1630029"><p>movie 아바타</p></Link>
    </>
  );
}
