import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <Link to="/login"><p>Login</p></Link>
      <Link to="/register"><p>Sign Up</p></Link>
      <Link to="/movies/123"><p>Movie123</p></Link>
      <Link to="/movies/tt1630029"><p>movie 아바타</p></Link>
    </>
  );
}
