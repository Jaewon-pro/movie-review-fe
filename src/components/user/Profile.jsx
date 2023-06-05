import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../../lib/axios";

export default function Profile( {username} ) {
  const [userInfo, setUserInfo] = useState('');
  const navigate = useNavigate();

  if (username === null || username === undefined) {
    username = 'my-info';
  }

  useEffect(() => {

    axiosInstance
    .get(`/accounts/${username}`)
    .then(function(response) {
      setUserInfo(response.data);
      console.log(response.data);
      console.log("성공"+response.status);
    })
    .catch(function(error) {
      alert(error);
      navigate('/');
      console.log("실패"+error);
    });
  }, [navigate, username]);

  if (userInfo === null || userInfo.length === 0) {
    return (
      <>유저 정보를 찾을 수 없습니다!</>
    );
  }

  return (
    <>
      <p>{userInfo.username}의 정보</p>
      <p>이메일: {userInfo.email}</p>
      <p>가입 일자: {userInfo.createdAt}</p>
      <p>작성한 리뷰의 수: {Object.keys(userInfo.reviewIdList).length}</p>
    </>
  );
}
