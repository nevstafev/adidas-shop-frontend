import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Categories from './Сategories';

const Wrapper = styled.aside`
  background-color: #0e0e0e;
  flex: 1 0 414px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;
`;

export default () => (
  <Wrapper>
    <Logo />
    <Search />
    <Categories />
  </Wrapper>
  );
