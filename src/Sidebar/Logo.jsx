import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  &:focus {
    outline: none;
  }
  align-self: center;
  margin: 15px;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 30px;
    margin-right: 0;
    align-self: flex-start;
  }
`;

const Image = styled.img`
  height: 30px;
  padding: 5px;
  @media screen and (min-width: 768px) {
    height: 55px;
    width: 80px;
  }  
`;

export default () => <StyledLink to="./"><Image src={require('./logo.svg')} alt="" /></StyledLink>;
