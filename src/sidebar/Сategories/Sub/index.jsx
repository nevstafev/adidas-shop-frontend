import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  text-align: center;
  margin-top: 3px;
  margin-bottom: 56px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-family: "AndaleMono";
  font-size: 24px;
  text-decoration: none;
  color: #3c3c3c;
  margin-bottom: 26px;
  &:hover {
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }
`;

const StyledLinkSelected = styled(StyledLink)`
  color: #ffffff;
`;

export default () => {
  return (
    <Nav>
      <StyledLinkSelected to="#">Shoes</StyledLinkSelected>
      <StyledLink to="#">Clothing</StyledLink>
      <StyledLink to="#">Accessories</StyledLink>
    </Nav>
  );
};
