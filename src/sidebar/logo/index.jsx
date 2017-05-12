import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: block;
  padding: 10px;
  margin-top: 40px;
  margin-bottom: 30px;
  align-self: flex-start;
  &:focus {
    outline: none;
  }
`;

export default () => {
  return <StyledLink to="./"><img src={require("./logo.png")} /></StyledLink>;
};
