import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axiosInstance from "../../lib/axios";

export default function Profile({nickname}) {
  const [userInfo, setUserInfo] = useState('');
  const navigate = useNavigate();

  let api;
  if (nickname === null || nickname === undefined) {
    api = '/accounts/me';
  } else {
    api = `/accounts/${nickname}`
  }

  useEffect(() => {

    axiosInstance
      .get(api)
      .then(function (response) {
        setUserInfo(response.data.data);
        console.log(response.data.data);
        console.log("프로필 성공" + response.status);
      })
      .catch(function (error) {
        alert(error);
        navigate('/');
        console.log("프로필 실패" + error);
      });
  }, [navigate, nickname, api]);

  if (userInfo === null || userInfo.length === 0) {
    return (
      <>유저 정보를 찾을 수 없습니다!</>
    );
  }

  return (
    <>
      <p>{userInfo.nickname}의 정보</p>
      <p>이메일: {userInfo.email}</p>
      <p>가입 일자: {userInfo.createdAt}</p>
      {/*<p>작성한 리뷰의 수: {Object.keys(userInfo.reviewIdList).length}</p>*/}
    </>
  );
}
