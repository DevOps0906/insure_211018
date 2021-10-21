import React from "react";

const Result = ({ newsData }) => {
  return (
    <div>
      {newsData.map((news) => {
        return <p key={news.title}>{news.title}</p>;
      })}
    </div>
  );
};

export default Result;
