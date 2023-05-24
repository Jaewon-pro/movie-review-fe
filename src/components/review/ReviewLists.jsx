import React, { useState, useEffect } from 'react';

// const ReviewType = {
//   rating: '',
//   body: '',
//   author: ''
// }

function ReviewInfo({review}) {
  const map1 = new Map(Object.entries(review));
  // console.log("MPA");
  // console.log(map1);
  // console.log(map1.get("body"));
  return (
    <div className='review-information'>
      <h3>평점: {map1.get("rating")}</h3>
      <h4>{map1.get("body")}</h4>
      <p>작성자: {map1.get("authorUsername")}</p>
    </div>
  );
}

export default function ReviewLists({objectReviewLists}) {
  const [reviewLists, setReviewLists] = useState([]);

  useEffect(() => {
    if (objectReviewLists) {
      console.log("Object: ", objectReviewLists);
      setReviewLists(Object.values(objectReviewLists));
    }
  }, [objectReviewLists]);

  // console.log("Review: ", reviewLists);

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
