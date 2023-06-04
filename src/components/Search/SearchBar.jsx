import React from "react";

function SearchBar( {search, onChange} ) {
  return (
    <div>
      <input className="input" type="text" value={search} onChange={onChange} />
    </div>
  )
}

export default SearchBar;
