import axios from "axios";
import React, { useState } from "react";
import encrypt from "../lib/encrypt";

const InsurePage = () => {
  const [result, setResult] = useState(undefined);
  const [userId, setUserId] = useState(undefined);
  const [userPassword, setUserPassword] = useState(undefined);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "id") {
      setUserId(value);
    } else if (name === "pwd") {
      setUserPassword(value);
    }
  };
  const getInsureInfo = () => {
    const option = {
      method: "POST",
      url: "https://datahub-dev.scraping.co.kr/scrap/pfm/credit4u/IntegratedInquiry",
      headers: {
        Authorization: "Token 332460548c3348109095d32b82710b518cbb318e",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        LOGINID: userId,
        LOGINPWD: encrypt.makeAES(userPassword),
      },
    };
    axios(option).then((response) => {
      console.log(response.data);
      setResult(response.data.data.JANYEOBOJANGGIGAN[0].SANGPUMMYUNG);
    });
  };

  return (
    <div>
      아이디입력 : <input name="id" onChange={handleInputChange}></input> <br />
      패스워드 입력 :{" "}
      <input type="password" name="pwd" onChange={handleInputChange}></input>
      <br />
      <button onClick={getInsureInfo}>보험 조회하기</button>
      {result !== undefined && <>{result.data.ERRMSG}</>}
    </div>
  );
};

export default InsurePage;
