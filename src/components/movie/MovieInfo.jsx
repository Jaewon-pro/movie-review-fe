import React from 'react';
import { Link } from 'react-router-dom';
import "./MovieInfo.css";

function MovieGenres({ genres }) {
  if (genres === undefined || genres === null) {
    return <></>;
  }

  return (
    <>{genres.join(', ')}</>
  );
}

function ReviewRatingPoint({ reviewList }) {

  if (reviewList === undefined || reviewList === null || reviewList.length === 0) {
    console.log(reviewList);
    return (<div>리뷰가 아직 없습니다!</div>);
  }
  const ratingResult = (reviewList.reduce((sum, currValue) => {
    return sum + currValue.rating;
  }, 0) / reviewList.length).toFixed(1);
  return (
    <div id='movie-info-rating'>평점 : {ratingResult}</div>
  )
}

export default function MovieInfo({ movie }) {
  if (movie === undefined) {
    return (<>영화 정보를 불러오는데 실패했습니다!</>);
  }
  
  return (
    <div id='movie-info' key={movie.imdbId}>
      <Link to={`/movies/${movie.imdbId}`}>
        <img id='movie-poster' src={movie.poster} alt="movie poster"></img>
      </Link>
      <div id='movie-information' key={movie.imdbId}>
        <h2>{movie.title}</h2>
        <p>개봉일: {movie.releaseDate}</p>
        <MovieGenres genres={movie.genres} key={movie.imdbId+"I"} />
        <ReviewRatingPoint reviewList={movie.reviewIds} />
      </div>
    </div>
  );
}
