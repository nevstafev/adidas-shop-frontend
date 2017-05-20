import React from 'react';
import styled from 'styled-components';

const Menu = styled.button`
  width: 55px;
  height: 30px;
  margin: 15px;
  padding: 0;
  align-self: center;
  background: url(${require('./menu.svg')}) no-repeat center;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default () => (<Menu />);
