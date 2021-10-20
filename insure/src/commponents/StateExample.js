import React, { useState } from "react";

const StateExample = () => {
  const [title, setTitle] = useState("초기 문자");
  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value);
    setTitle(value);
  };

  return (
    <div>
      <p>{title}</p>
      <input onChange={handleChange}></input>
    </div>
  );
};

export default StateExample;
