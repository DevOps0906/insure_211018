import React from "react";

const Search = ({ handleQueryInput }) => {
  return (
    <div>
      <input onChange={handleQueryInput}></input>
      <button>검색</button>
    </div>
  );
};

export default Search;
