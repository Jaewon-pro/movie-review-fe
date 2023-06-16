import axiosInstance from "../lib/axios";

const updateReview = (reviewAuthorUsername, createdAt, body) => {

  axiosInstance
    .put(`/reviews/${reviewAuthorUsername}/${createdAt}`, body)
    .then((res) => {
      console.log(res);
      alert('수정되었습니다!');
      // navigate('/');
    })
    .catch((res) => {
      console.log(res);
      alert('수정 에러');
    });
}

export default updateReview;
