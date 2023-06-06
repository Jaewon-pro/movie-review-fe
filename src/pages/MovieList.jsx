import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../lib/axios';

import MovieInfo from '../components/movie/MovieInfo';

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      axiosInstance
      .get(`/movies`)
      .then((res) => {
        setMovieList(res.data);
        console.log("성공"+res.status);
      })
      .catch((error) => {
        alert("올바르지 않은 접근입니다.");
        navigate('/');
        console.log("실패"+error);
      });
  }, [navigate]);

  // console.log(movie.title + '불러옴');

  return (
    <div className='movie-list'>
      {movieList.map((movie) => {
        return (
          <>
            <MovieInfo title={movie.title} poster={movie.poster} genres={movie.genres} imdbId={movie.imdbId}/>
          </>
        );
      })}
    </div>
  );
}
