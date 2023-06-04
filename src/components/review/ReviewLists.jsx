import React, { useState, useEffect } from 'react';
import ReviewUpdateButton from './ReviewUpdateButton';
import ReviewDeleteButton from './ReviewDeleteButton';

function ReviewInfo( {review} ) {
  const map1 = new Map(Object.entries(review));
  const username = sessionStorage.getItem('username');
  
  return (
    <div className='review-information'>
      <p>평점: {map1.get("rating")} 내용: {map1.get("body")} 작성자: {map1.get("authorUsername")}</p>
      {map1.get("authorUsername") === username
        ? <>
            <ReviewUpdateButton review={map1}/>
            <ReviewDeleteButton reviewAuthorUsername={map1.get("authorUsername")} createdAt={map1.get("createdAt")}/>
          </>
        : <></>
      }
    </div>
  );
}

export default function ReviewLists( {objectReviewLists} ) {
  const [reviewLists, setReviewLists] = useState([]);

  useEffect(() => {
    if (objectReviewLists) {
      console.log("Object: ", objectReviewLists);
      setReviewLists(Object.values(objectReviewLists));
    }
  }, [objectReviewLists]);

  if (reviewLists.length === 0) {
    return (
      <p>첫번째 리뷰를 남겨보세요!</p>
    );
  }

  return (
    <div className='review-list'>
      {reviewLists.map((review) => { return (<ReviewInfo key={review.id} review={review}/>); })}
    </div>
  );
}
