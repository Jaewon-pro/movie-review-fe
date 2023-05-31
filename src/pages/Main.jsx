import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import axiosInstance from '../lib/axios';
import { Link } from 'react-router-dom';

function FoundMovieList( {foundMovieList} ) {
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

export default function Main() {
  const [search, setSearch] = useState(''); // 검색할 영화 제목
  const [foundMovieList, setFoundMovieList] = useState([]); // 일치하는 영화들

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    axiosInstance
    .get(`/movies/title/${search}`)
    .then((res) => {
      console.log(res.data);
      let list = [];
      list.push(res.data); // 임시로 영화 한개만 찾음
      console.log("찾을려고 한 영화: " + search + ", " + list + "!");
      setFoundMovieList(list);
    })
    .catch((res) => {
      //console.log(res);
    });
  }, [search]);

  return (
    <>
      <SearchBar value={search} onChange={onChange} />
      <FoundMovieList foundMovieList={foundMovieList} />
    </>
  );
}
