import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../lib/axios';

import MovieInfo from '../components/movie/MovieInfo';
import ReviewLists from '../components/review/ReviewLists';
import ReviewForm from '../components/review/ReviewForm';

export default function Movie() {
  const { imdbId } = useParams();
  const [movie, setMovie] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
      axiosInstance
      .get(`/movies/${imdbId}`)
      .then((res) => {
        setMovie(res.data);
        console.log("성공"+res.status);
      })
      .catch((error) => {
        alert("올바르지 않은 접근입니다.");
        navigate('/');
        console.log("실패"+error);
      });
  }, [navigate, imdbId]);

  console.log(movie.title + '불러옴');

  return (
    <div className='movie'>
      <MovieInfo title={movie.title} poster={movie.poster} genres={movie.genres} imdbId={movie.imdbId}/>
      <ReviewForm imdbId={imdbId}/>
      <ReviewLists objectReviewLists={movie.reviewIds}/>
    </div>
  );
}
