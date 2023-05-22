import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from '../components/movie/MovieInfo';
import ReviewLists from '../components/review/ReviewLists';
import ReviewForm from '../components/review/ReviewForm';

export default function Movie() {
  const { imdbId } = useParams();

  const ReviewListsDummy = [
    {rating: 1, body: "asdf", author: "John"},
    {rating: 4, body: "asdf1", author: "AHH"},
  ];

  return (
    <div className='movie'>
      <MovieInfo imdbId={imdbId} />
      <ReviewForm />
      <ReviewLists reviewLists={ReviewListsDummy}/>
    </div>
  );
}
