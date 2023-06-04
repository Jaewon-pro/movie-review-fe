import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
      <ReviewStar key={"R"+index} maxCount={element} />
    </label>
  ));
  return <>{renderArrayElements}</>;
}

function ReviewUpdateForm({ originalReview }) {
  const { imdbId } = useParams();
  const navigate = useNavigate();
  const [inputReviewBody, setInputReviewBody] = useState(originalReview.get("body"));
  const [inputRating, setInputRating] = useState(originalReview.get("rating"));

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

    const reviewAuthorUsername = originalReview.get("authorUsername");
    const createdAt = originalReview.get("createdAt");

    axiosInstance
      .put(`/reviews/${reviewAuthorUsername}/${createdAt}`, body)
      .then((res) => {
        console.log(res);
        alert('수정되었습니다!');
        navigate('/');
      })
      .catch((res) => {
        console.log(res);
        alert('수정 에러');
      });
  }

  return (
    <form className='review-form' onSubmit={submitHandler}>
      <div className='rating'>
        <ReviewStarLabel onChangeRating={handleRatingChange}/>
      </div>
      <div className='review-table'>
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
              <td><input type="submit" value={"수정하기"}/></td>
          </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}

export default function ReviewUpdateButton( {review} ) { // 수정하는 버튼
  const [showForm, setShowForm] = useState(false);
  
  const submitHandler = (e) => {
    e.preventDefault();
    setShowForm(true);
  }

  return (
    <>
      <button className='review-update-button' onClick={submitHandler}>수정하기</button>
      { showForm === true
        ? <ReviewUpdateForm originalReview={review}/>
        : <></>
      }
    </>
  );
}
