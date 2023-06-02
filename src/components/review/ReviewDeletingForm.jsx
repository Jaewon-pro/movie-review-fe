import React, { useState, useEffect } from 'react';
import axiosInstance from '../../lib/axios';

export default function DeleteReviewButton( {reviewId} ) { // 삭제하는 버튼
  console.log(reviewId.timestamp);
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Delete button!');

    //const reviewId = '';
  
    axiosInstance
      .delete(`/reviews/${objectId}`)
      .then((res) => {
        console.log(res);
        alert('삭제되었습니다.');
        window.location.replace("/");
      })
      .catch((res) => { console.log(res) });
  }

  return (
    <form className='review-deleting-form' onSubmit={submitHandler}>
      <button value={"삭제"}/>
    </form>
  );
}
