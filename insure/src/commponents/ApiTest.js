import React from "react";
import axios from "axios";

const ApiTest = () => {
  const handleClick = () => {
    console.log("버튼을 클릭했습니다");
    let apiUrl =
      "https://newsapi.org/v2/everything?qInTitle=애플&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5";
    //여러분들의 URL
    axios.get(apiUrl).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>데이터가져오기</button>
    </div>
  );
};

export default ApiTest;
