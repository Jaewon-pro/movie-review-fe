import React from "react";
import "./SearchBar.css";

function SearchBar( {search, onChange} ) {
  return (
    <div id="search-bar">
      <input type="text" value={search} onChange={onChange} placeholder="영화 제목으로 검색"/>
    </div>
  )
}

export default SearchBar;
