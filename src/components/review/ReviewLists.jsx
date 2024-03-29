import React, {useCallback, useEffect, useState} from 'react';
import ReviewUpdateButton from './ReviewUpdateButton';
import ReviewDeleteButton from './ReviewDeleteButton';
import {Link} from 'react-router-dom';
import axiosInstance from "../../lib/axios";
import Pagination1 from "../pagination/pagination";

function ReviewInfo({review}) {
  const map1 = new Map(Object.entries(review));
  const nickname = sessionStorage.getItem('nickname');

  return (
    <div id='review-information' key={"Re" + map1.get("id")}>
      <p>평점: {map1.get("rating")} 내용: {map1.get("body")} </p>
      작성자: <Link to={`/accounts/${map1.get("authorName")}`}>{map1.get("authorName")}</Link>
      {map1.get("authorName") === nickname
        ? <>
          <ReviewUpdateButton review={map1}/>
          <ReviewDeleteButton reviewAuthorUsername={map1.get("authorName")} createdAt={map1.get("createdAt")}/>
        </>
        : <></>
      }
    </div>
  );
}

export default function ReviewLists({movieImdbId}) {
  const [reviewList, setReviewList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const setPageCallback = useCallback((idx) => {
    setCurrentPage(idx);
  }, [])

  useEffect(() => {
    if (movieImdbId === null || movieImdbId === undefined) {
      console.info("movie id is null");
    }
    setReviewList([])
    axiosInstance
      .get(`/reviews/${movieImdbId}?page=${currentPage - 1}&size=${pageSize}&sort=createdAt,desc`)
      .then((res) => {
        console.log("리뷰: " + movieImdbId + res.data);
        setReviewList(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movieImdbId, currentPage, pageSize]);


  if (reviewList.length === 0) {
    return (
      <p>첫번째 리뷰를 남겨보세요!</p>
    );
  }

  return (
    <div id='review-list'>
      {reviewList.map((review) => {
        return (<ReviewInfo key={review.id} review={review}/>);
      })}

      <Pagination1 page={currentPage} setPage={setPageCallback} total={999999}
                   limit={pageSize}/>
    </div>
  );
}
