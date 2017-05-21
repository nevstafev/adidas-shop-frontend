import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Search from './Search';
import Navigation from './Navigation';
import Menu from './Menu';

const Wrapper = styled.aside`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #0e0e0e;
  @media screen and (min-width: 768px) {
    position: static;
    height: initial;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-start;
    flex: 1 0 327px;
  }
  @media screen and (min-width: 1024px) {
    flex: 1 0 414px;
  }
`;

export default () => (
  <Wrapper>
    <Logo />
    <Menu />
    <Search />
    <Navigation />
  </Wrapper>
  );
