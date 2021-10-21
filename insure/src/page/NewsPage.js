import React, { useState } from "react";
import Header from "../commponents/News/Header";
import Search from "../commponents/News/Search";

const NewsPage = () => {
  const [queryInput, setqueryInput] = useState("");
  const handleQueryInput = (e) => {
    const { value } = e.target;
    setqueryInput(value);
    console.log(queryInput);
  };
  return (
    <div>
      <Header title="뉴스 검색"></Header>
      <Search handleQueryInput={handleQueryInput}></Search>
      {/* 결과 컴포넌트 */}
    </div>
  );
};

export default NewsPage;
