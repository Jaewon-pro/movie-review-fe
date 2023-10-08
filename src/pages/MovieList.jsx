import React, {useState, useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../lib/axios';

import MovieInfo from '../components/movie/MovieInfo';
import Pagination1 from "../components/pagination/pagination";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalMovieCnt, setTotalMovieCnt] = useState(0)

  const setPageCallback = useCallback((idx) => {
    setCurrentPage(idx);
  }, [])

  useEffect(() => {
    axiosInstance
      .get(`/movies/count`)
      .then((res) => {
        setTotalMovieCnt(res.data.data)
      })
      .catch((error) => {
        alert("올바르지 않은 접근입니다.");
        console.log("실패" + error);
      });
  }, []);


  useEffect(() => {
      axiosInstance
      .get(`/movies?page=${currentPage - 1}&size=10&sort=releaseDate,desc`)
      .then((res) => {
        setMovieList(res.data.data);
        console.log("영화 리스트 로딩 성공: " + res.status + ", 코드: " + res.data.code);
      })
      .catch((error) => {
        alert("올바르지 않은 접근입니다.");
        navigate('/');
        console.log("실패" + error);
      });
  }, [navigate, currentPage, pageSize]);

  return (
    <div className='movie-list'>
      {movieList.map((movie) => {
        return <MovieInfo movie={movie} key={movie.imdbId}/>;
      })}

      <Pagination1 page={currentPage} setPage={setPageCallback} total={totalMovieCnt}
                   limit={pageSize}/>
    </div>
  );
}
