import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../lib/axios';

export default function ReviewDeleteButton( {reviewAuthorUsername, createdAt} ) { // 삭제하는 버튼
  const navigate = useNavigate();
  
  const submitHandler = (e) => {
    e.preventDefault();

    console.log('Delete button!' + reviewAuthorUsername + createdAt);
  
    return axiosInstance
      .delete(`/reviews/${reviewAuthorUsername}/${createdAt}`)
      .then((res) => {
        console.log(res);
        alert('삭제되었습니다.');
        navigate('/');
      })
      .catch((res) => {
        alert('삭제에 실패했습니다.' + res);
        console.log(res);
      });
  }

  return (
    <button className='review-delete-button' onClick={submitHandler}>삭제하기</button>
  );
}
