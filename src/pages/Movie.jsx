import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../lib/axios';

import "../components/Movie.css";

function Movie() {
  const { imdbId } = useParams();
  const navigate = useNavigate();
  const [inputReviewBody, setInputReviewBody] = useState('');
  const [inputRating, setInputRating] = useState('');
  const [movie, setMovie] = useState('');

  useEffect(() => {
    if (!movie) {
      axiosInstance
      .get(`/movies/${imdbId}`)
      .then(function(response) {
        setMovie(response.data);
        console.log("성공");
      })
      .catch(function(error) {
        navigate("/");
        alert("올바르지 않은 접근입니다.");
        console.log("실패"+error);
      })
    }
  })
  
  const handleInputReviewBody = (e) => {
    setInputReviewBody(e.target.value);
  }

  const handleRatingChange = (e) => {
    setInputRating(e.target.value);  
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
      "reviewBody": inputReviewBody,
      "rating": inputRating * 2, // 10점 만점
      "imdbId": imdbId
    };

    axiosInstance
      .post('/reviews', body)
      .then((res) => console.log(res))
      .catch((res) => { console.log(res) });
  };

  return (
    <div className='movie-info'>
      <div className="movie-header">
        <h2>{movie.title}</h2>
        <img src={movie.poster}></img>
        <span>{movie.genres}</span>
      </div>

      <form className='review' onSubmit={submitHandler}>
      <div className="rating">
        <label>
          <input type="radio" name="stars" value="1" onChange={handleRatingChange}/>
          <span className="icon">★</span>
        </label>
        <label>
          <input type="radio" name="stars" value="2" onChange={handleRatingChange}/>
          <span className="icon">★</span>
          <span className="icon">★</span>
        </label>
        <label>
          <input type="radio" name="stars" value="3" onChange={handleRatingChange}/>
          <span className="icon">★</span>
          <span className="icon">★</span>
          <span className="icon">★</span>   
        </label>
        <label>
          <input type="radio" name="stars" value="4" onChange={handleRatingChange}/>
          <span className="icon">★</span>
          <span className="icon">★</span>
          <span className="icon">★</span>
          <span className="icon">★</span>
        </label>
        <label>
          <input type="radio" name="stars" value="5" onChange={handleRatingChange}/>
          <span className="icon">★</span>
          <span className="icon">★</span>
          <span className="icon">★</span>
          <span className="icon">★</span>
          <span className="icon">★</span>
        </label>
      </div>
      <div className='review-body'>
        <table>
        <tbody>
          <tr>
              <th>내용</th>
              <td><textarea
                placeholder="여기에 입력하세요"
                value={inputReviewBody}
                onChange={handleInputReviewBody}
              ></textarea></td>
          </tr>
          <tr>
              <td></td>
              <td><input type="submit" value={"작성하기"}/></td>
          </tr>
          </tbody>
        </table>
      </div>
      </form>
    </div>

  );
}

export default Movie;
