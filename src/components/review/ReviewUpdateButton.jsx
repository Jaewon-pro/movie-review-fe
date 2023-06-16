import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import updateReview from '../../api/updateReview';

export default function ReviewUpdateButton({ review }) { // 수정하는 버튼
  const { imdbId } = useParams();
  const [showForm, setShowForm] = useState(false);
  
  const submitHandler = (e) => {
    e.preventDefault();
    setShowForm(!showForm); // 반전
  }

  return (
    <>
      <button className='review-update-button' onClick={submitHandler}>수정</button>
      { showForm === true
        ? <ReviewForm imdbId={imdbId} review={review} onSubmitHandler={updateReview}/>
        : <></>
      }
    </>
  );
}
