import axios from "axios";
import React, { useState } from "react";
import Header from "../commponents/News/Header";
import Search from "../commponents/Phamacy/Search";
import Result from "../commponents/Phamacy/Result";

const PharmacyPage = () => {
  const [queryInput, setqueryInput] = useState("");
  const [phList, setphList] = useState([]);

  const handleQueryInput = (e) => {
    const { value } = e.target;
    setqueryInput(value);
    console.log(queryInput);
  };

  const handleSearchBtn = () => {
    let apiUrl = `http://apis.data.go.kr/B551182/pharmacyInfoService/getParmacyBasisList?ServiceKey=uiu3ZzNzDB04UbxOtOL1atH04WOtxB5WSKkPbaCASVHbwgcsIPwHA5Qp6xOmSe6fzCnUVifZcfTXDkgNegv4qQ%3D%3D&sidoCd=210000`;
    //여러분들의 URL
    axios.get(apiUrl).then(({ data }) => {
      const pharmacyList = data;
      console.log(pharmacyList.response.body.items.item);
      setphList(pharmacyList);
    });
  };
  return (
    <div>
      <Header title={"약국 목록"}></Header>
      <Search
        handleQueryInput={handleQueryInput}
        handleSearchBtn={handleSearchBtn}
      ></Search>
      {/* <Result></Result> */}
    </div>
  );
};
//읍면동을 입력 받아 약국 리스트를 조회하는 페이지를 작성해 주세요

export default PharmacyPage;
