import axios from "axios";
import React, { useState } from "react";
import Header from "../commponents/News/Header";
import Search from "../commponents/News/Search";

const NewsPage = () => {
  const [queryInput, setqueryInput] = useState("");
  const [newsData, setnewsData] = useState([]);

  const handleQueryInput = (e) => {
    const { value } = e.target;
    setqueryInput(value);
    console.log(queryInput);
  };

  const handleSearchBtn = () => {
    let apiUrl =
      "https://newsapi.org/v2/everything?qInTitle=애플&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5";
    //여러분들의 URL
    axios.get(apiUrl).then(({ data }) => {
      const newsArticles = data.articles;
      console.log(data.articles);
      setnewsData(newsArticles);
    });
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
