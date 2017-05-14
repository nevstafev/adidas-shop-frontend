import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CategorySub from './Sub';

const Nav = styled.nav`
  display: block;
  text-align: center;
  text-transform: uppercase;
  align-self: center;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  font-family: "AvenirNext";
  font-size: 24px;
  font-weight: bold;
  color: #303030;
  text-decoration: none;
  margin-bottom: 29px;
  display: block;
  &:hover {
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }
`;

const StyledLinkSelected = styled(StyledLink)`
  color: #ffffff;
  position: relative;
  &:after {
    position: absolute;
    content: url(${require('./group-2.svg')});
    margin-left: 7px;
  }
`;

export default () => (
  <Nav>
    <StyledLinkSelected to="#">
        Sports
      </StyledLinkSelected>
    <CategorySub />
    <StyledLink to="#">Brands</StyledLink>
    <StyledLink to="#">Micoach</StyledLink>
  </Nav>
  );
