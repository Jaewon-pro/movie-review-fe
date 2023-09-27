import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../lib/axios';

import MovieInfo from '../components/movie/MovieInfo';
import ReviewLists from '../components/review/ReviewLists';
import ReviewForm from '../components/review/ReviewForm';
import postReview from '../api/postReview';

export default function Movie() {
  const { imdbId } = useParams();
  const [movie, setMovie] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
    .get(`/movies/${imdbId}`)
    .then((res) => {
      setMovie(res.data);
      console.log(res.data.title + ": 로딩 성공("+res.status);
    })
    .catch((error) => {
      alert("올바르지 않은 접근입니다.");
      navigate('/');
      console.log("실패"+error);
    });

  }, [navigate, imdbId]);

  return (
    <div className='movie'>
      <MovieInfo movie={movie}/>
      <ReviewForm imdbId={imdbId} onSubmitHandler={postReview}/>
      <ReviewLists movieImdbId={imdbId}/>
    </div>
  );
}
