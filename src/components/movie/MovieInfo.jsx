import "./MovieInfo.css";
import React from 'react';

export default function MovieInfo({title, poster, genres}) {

  return (
    <div className='movie-info'>
      <div className="movie-header">
        <h2>{title}</h2>
        <img src={poster}></img>
        <span>{genres}</span>
      </div>
    </div>
  );
}
