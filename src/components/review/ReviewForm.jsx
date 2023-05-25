import React, { useState } from 'react';
import axiosInstance from '../../lib/axios';

function ReviewStar({ maxCount }) {
  return (
    Array(maxCount).fill(<span className="icon">★</span>)
  );
}

function ReviewStarLabel({ onChangeRating }) {
  const myArray = [...Array(5)].map((_, index) => index + 1); // 1, 2, .. 5
  const renderArrayElements = myArray.map((element, index) => (
    <label key={index}>
      <input type="radio" name="stars" value={element} onChange={onChangeRating}/>
      <ReviewStar key={index} maxCount={element} />
    </label>
  ));
  return <>{renderArrayElements}</>;
}

export default function ReviewForm({ imdbId }) {
  const [inputReviewBody, setInputReviewBody] = useState('');
  const [inputRating, setInputRating] = useState('');

  const handleInputReviewBody = (e) => { setInputReviewBody(e.target.value); }
  const handleRatingChange = (e) => { setInputRating(e.target.value); }

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputReviewBody.length === 0) {
      alert("리뷰를 입력해주세요");
      return;
    }
    if (inputRating <= 0) {
      alert(`${inputRating}은 올바른 평가 점수가 이닙니다! (1~10)`);
      return;
    }

    const body = {
      "reviewBody": inputReviewBody,
      "rating": inputRating * 2, // 10점 만점
      "imdbId": imdbId
    };

    axiosInstance
      .post('/reviews', body)
      .then((res) => {
        console.log(res)
      })
      .catch((res) => { console.log(res) });
  }

  return (
    <form className='review' onSubmit={submitHandler}>
    <div className='rating'>
      <ReviewStarLabel onChangeRating={handleRatingChange}/>
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
  );
}
