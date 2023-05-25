import React from 'react';
import "./MovieInfo.css";

export default function MovieInfo({title, poster, genres}) {

  return (
    <div className='movie-info'>
      <div className="movie-header">
        <h2>{title}</h2>
        <img src={poster} alt="movie poster"></img>
        <span>{genres}</span>
      </div>
    </div>
  );
}
