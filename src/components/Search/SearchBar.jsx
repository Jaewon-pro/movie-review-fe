import React from "react";

function SearchBar( {search, onChange} ) {
  return (
    <div>
      <input className="input" type="text" value={search} onChange={onChange} placeholder="영화 제목으로 검색"/>
    </div>
  )
}

export default SearchBar;
