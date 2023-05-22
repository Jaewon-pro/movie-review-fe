import "./MovieInfo.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../lib/axios';

export default function MovieInfo({imdbId}) {
  const [movie, setMovie] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // if (!movie) {
      axiosInstance
      .get(`/movies/${imdbId}`)
      .then(function(response) {
        if (response.status !== 200) {
          alert(response.data.codeDetail);
          navigate('/');
          console.log("실패"+response.data);
          return;
        }
        setMovie(response.data);
        console.log("성공"+response.status);
      })
      .catch(function(error) {
        alert("올바르지 않은 접근입니다.");
        navigate('/');
        console.log("실패"+error);
      })
    // }
  }, []);

  return (
    <div className='movie-info'>
      <div className="movie-header">
        <h2>{movie.title}</h2>
        <img src={movie.poster}></img>
        <span>{movie.genres}</span>
      </div>
    </div>
  );
}
