import React from "react";

const Search = ({ handleQueryInput, handleSearchBtn }) => {
  return (
    <div>
      <input onChange={handleQueryInput}></input>
      <button onClick={handleSearchBtn}>검색</button>
    </div>
  );
};

export default Search;
