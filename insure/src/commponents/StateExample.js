import React from "react";

const StateExample = () => {
  let title = "제목 입니다.";
  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value);
    title = value;
  };
  return (
    <div>
      <p>{title}</p>
      <input onChange={handleChange}></input>
    </div>
  );
};

export default StateExample;
