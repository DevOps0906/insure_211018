import React from "react";
import styled from "styled-components";

const DesignComp = styled.div`
  background: skyblue;
  font-size: 20px;
  padding: 20px;
  font-weight: bold;
  border: 3px solid #1c6ea4;
`;

const DesignComponent = () => {
  return <DesignComp>안녕하세요 디자인입니다.</DesignComp>;
};

export default DesignComponent;
