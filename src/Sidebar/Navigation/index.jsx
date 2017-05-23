import React, { Component } from 'react';
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

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      selectedMenu: '',
      selectedSubcategory: '',
    };
  }

  render() {
    return (
      <Wrapper isVisible={this.props.isVisible}>
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
  }
}

export default Navigation;
