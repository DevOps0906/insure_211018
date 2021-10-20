import React, { useState } from "react";

const StateExample = () => {
  const [title, setTitle] = useState("초기 문자");
  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name);
    setTitle(value);
  };

  const handleClick = () => {
    alert(title);
  };

  return (
    <div>
      <p>{title}</p>
      <input onChange={handleChange} name="contents"></input>
      <button onClick={handleClick}>전송 버튼</button>
    </div>
  );
};

export default StateExample;
