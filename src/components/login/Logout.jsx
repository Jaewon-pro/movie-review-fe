import React from 'react';
import useConfirm from '../Confirm';
import handleLogout from '../../api/handleLogout';

export default function Logout() {
  const logoutConfirm = useConfirm("로그아웃 하시겠습니까?", handleLogout, null);

  const onClickLogout = () => {
    logoutConfirm();
    window.location.replace("/");
  }

  return (
    <div className='logout'>
      <button className='logout-button' onClick={onClickLogout}>로그아웃하기</button>
    </div>
  );
}
