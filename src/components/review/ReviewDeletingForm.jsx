import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../lib/axios';

export default function DeleteReviewButton( {reviewAuthorUsername, createdAt} ) { // 삭제하는 버튼
  const navigate = useNavigate();
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Delete button!' + reviewAuthorUsername + createdAt);
  
    axiosInstance
      .delete(`/reviews/${reviewAuthorUsername}/${createdAt}`)
      .then((res) => {
        console.log(res);
        alert('삭제되었습니다.');
        navigate('/');
        // window.location.reload();
      })
      .catch((res) => {
        alert('삭제에 실패했습니다.' + res);
        console.log(res);
      });
  }

  return (
    <form className='review-deleting-form' onSubmit={submitHandler}>
      <button>삭제하기</button>
    </form>
  );
}
