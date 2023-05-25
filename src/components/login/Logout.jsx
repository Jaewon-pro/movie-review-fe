import React from 'react';
import { useNavigate } from 'react-router-dom';
import useConfirm from '../Confirm';
import handleLogout from '../../api/handleLogout';

export default function Logout() {
  const navigate = useNavigate();
  const logoutConfirm = useConfirm("로그아웃하시겠습니까?", handleLogout, null);

  const onClickLogout = () => {
    logoutConfirm();
    navigate('/');
  }

  return (
    <div className='logout'>
      <button className='logout-button' onClick={onClickLogout}>로그아웃하기</button>
    </div>
  );
}
