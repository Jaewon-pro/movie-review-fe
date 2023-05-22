import React, { useState, useEffect } from 'react';

const ReviewType = {
  rating: '',
  body: '',
  author: ''
}

function ReviewInfo({review}) {
  return (
    <div>

    </div>
  );
}

export default function ReviewLists({reviewLists}) {
  return (
    <div className='review-list'>
      {reviewLists.map((review) => { return (<ReviewInfo review={review}/>); })}
      {/* {reviewLists.map((review) => { 
        return (<><h3>{review.rating}</h3><p>{review.body}</p><p>{review.author}</p></>);
      })} */}
    </div>
  );
}
