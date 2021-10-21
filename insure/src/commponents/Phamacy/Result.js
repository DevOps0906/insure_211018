import React from "react";

const Result = ({ pharmacyList }) => {
  return (
    <div>
      {pharmacyList.map((pharmacy) => {
        return <p key={pharmacy.yadmNm}>{pharmacy.yadmNm}</p>;
      })}
    </div>
  );
};

export default Result;
