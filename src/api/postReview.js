import axiosInstance from "../lib/axios";

const postReview = (body) => {
  axiosInstance
    .post('/reviews', body)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => { console.log(res) });
}

export default postReview;
