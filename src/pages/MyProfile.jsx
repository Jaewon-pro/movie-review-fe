import React from 'react';
import Profile from '../components/user/Profile';

export default function MyProfile() {
  const username = sessionStorage.getItem('username');
  return (
    <Profile username={username}/>
  );
}
