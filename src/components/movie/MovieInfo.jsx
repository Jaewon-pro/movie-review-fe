import React from 'react';
import "./MovieInfo.css";
import { Link } from 'react-router-dom';

export default function MovieInfo({title, poster, genres, imdbId}) {

  return (
    <div className='movie-info'>
      <div className="movie-header">
        <h2>{title}</h2>
        <Link to={"/movies/"+imdbId}>
          <img id='movie-poster' src={poster} alt="movie poster"></img>
          {/* <img src={m.poster} alt="Lights" style={{"width":"100%"}}/> */}
        </Link>
        <span>{genres}</span>
      </div>
    </div>
  );
}
