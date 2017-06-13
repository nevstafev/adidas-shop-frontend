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
    <Menu title="Basketball">
      <Link to="/products/basketball/shoes/">Shoes</Link>
      <Link to="/products/basketball/apparel/">Apparel</Link>
      <Link to="/products/basketball/accessories/">Accessories</Link>
    </Menu>
    <Menu title="Football">
      <Link to="/products/football/cleats/">Cleats</Link>
      <Link to="/products/football/apparel/">Apparel</Link>
      <Link to="/products/football/accessories/">Accessories</Link>
    </Menu>
    <Menu title="Running">
      <Link to="/products/running/shoes/">Shoes</Link>
      <Link to="/products/running/apparel/">Apparel</Link>
      <Link to="/products/running/accessories/">Accessories</Link>
    </Menu>
  </Wrapper>
);
