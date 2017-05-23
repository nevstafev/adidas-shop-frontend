import React from 'react';
import styled from 'styled-components';

import media from './../../utils/media';
import Link from './Link';
import Menu from './Menu';

const Wrapper = styled.nav`
  display: block;
  text-decoration: none;
  text-align: center;
  ${media.small`
    display: block;
    text-transform: uppercase;
    align-self: center;
  `}
`;

export default () => (
  <Wrapper>
    <Menu title="Football">
      <Link to="#">Shoes</Link>
      <Link to="#">Clothing</Link>
      <Link to="#">Accessories</Link>
    </Menu>
    <Menu title="Running">
      <Link to="#">Shoes</Link>
      <Link to="#">Clothing</Link>
      <Link to="#">Accessories</Link>
    </Menu>
    <Menu title="Basketball">
      <Link to="#">Shoes</Link>
      <Link to="#">Clothing</Link>
      <Link to="#">Accessories</Link>
    </Menu>
  </Wrapper>
);
