import React from "react";

const ApiTest = () => {
  const handleClick = () => {
    console.log("버튼을 클릭했습니다");
  };

  return (
    <div>
      <button onClick={handleClick}>데이터가져오기</button>
    </div>
  );
};

export default ApiTest;
