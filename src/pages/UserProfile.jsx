import React from 'react';
import Profile from '../components/user/Profile';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
  const {username} = useParams('');
  return (
    <Profile nickname={username} />
  );
}
