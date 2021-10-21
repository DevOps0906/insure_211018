import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  height: 50px;
  border-bottom: 1px solid black;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Header = ({ title }) => {
  return <HeaderBlock>{title}</HeaderBlock>;
};

export default Header;
