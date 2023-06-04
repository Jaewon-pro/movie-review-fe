import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../../lib/axios";

export default function Profile() {
  const [userInfo, setUserInfo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
    .get(`/accounts/my-info`)
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
  }, []);

  if (userInfo === null || userInfo.length === 0) {
    return (
      <>유저 정보를 찾을 수 없습니다!</>
    );
  }

  return (
    <>
      <p>안녕하세요 {userInfo.username}</p>
      <p>이메일: {userInfo.email}</p>
      <p>가입 일자: {userInfo.createdAt}</p>
      <p>작성한 리뷰의 수: {Object.keys(userInfo.reviewIdList).length}</p>
    </>
  );
}
