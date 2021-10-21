import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

const HospitalDetail = () => {
  const { search } = useLocation();
  const [result, setResult] = useState();
  const { ykiho } = queryString.parse(search);
  useEffect(() => {
    getHospitalDetailData();
  }, []);
  const getHospitalDetailData = () => {
    console.log("콤포넌트가 마운트 될때 실행됩니다.");
    //axios
  };

  return (
    <div>
      {result !== undefined && (
        <>
          <p>{result.mfrnIntrsIlnsCdNm1}</p>
          <p>{result.mfrnIntrsIlnsCdNm2}</p>
          <p>{result.mfrnIntrsIlnsCdNm3}</p>
          <p>{result.mfrnIntrsIlnsCdNm4}</p>
          <p>{result.mfrnIntrsIlnsCdNm5}</p>
        </>
      )}
      {result === undefined && (
        <>
          <p>현재 등록된 데이터가 없습니다</p>
        </>
      )}
    </div>
  );
};

export default HospitalDetail;
