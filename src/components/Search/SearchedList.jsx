import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import axiosInstance from '../../lib/axios';
import {Link} from 'react-router-dom';

function SearchedMovieList({foundMovieList}) {
  if (foundMovieList === undefined || foundMovieList === null) {
    return (<>!!!!!!!!!!!!</>);
  }
  if (foundMovieList.length === 0) {
    return (<>찾고자 하는 영화가 없습니다.</>);
  }
  const movies = foundMovieList.map((movie) => {
    return (
      <>
        <Link to={`/movies/${movie.imdbId}`}>{movie.title}</Link>
      </>
    );
  });
  return (<>{movies}</>);
}

export default function Search() {
  const [searchTitle, setSearchTitle] = useState(''); // 검색할 영화 제목
  const [foundMovieList, setFoundMovieList] = useState([]); // 일치하는 영화들

  const onChange = (e) => {
    setSearchTitle(e.target.value);
  }

  useEffect(() => {
    if (searchTitle === '') return;
    axiosInstance
      .get(`/movies/title?name=${searchTitle}`)
      .then((res) => {
        console.log(res.data);
        let list = [];
        list.push(res.data); // 임시로 영화 한개만 찾음
        console.log("찾을려고 한 영화: " + searchTitle + ", " + list + "!");
        setFoundMovieList(list);
      })
      .catch((res) => {
        //console.log(res);
      });
  }, [searchTitle]);

  return (
    <>
      <SearchBar value={searchTitle} onChange={onChange}/>
      <SearchedMovieList foundMovieList={foundMovieList}/>
    </>
  );
}
