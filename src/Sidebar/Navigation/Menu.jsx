import React, { Component } from 'react';
import styled from 'styled-components';

import media from './../../utils/media';

const Category = styled.button`
  font-family: "AvenirNext";
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border: none;
  outline: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  position: relative;
  &:after {
    display: inline-block;
    position: absolute;
    content: url(${require('./collapse.svg')});
    ${props => props.isOpened && 'transform: rotate(180deg)'};
    margin-left: 5px;
  }
  ${media.small`
    margin-bottom: 30px;
  `}
`;

const Subcategories = styled.nav`
  text-align: center;
  margin-bottom: 10px;
  transition-property: all;
  transition-duration: 1s;
  ${media.small`
    margin-bottom: 50px;
  `}
`;

class Menu extends Component {
  constructor() {
    super();
    this.state = { isOpened: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    return (
      <div>
        <Category isOpened={this.state.isOpened} onClick={this.toggle}>
          {this.props.title}
        </Category>
        {this.state.isOpened &&
          <Subcategories>{this.props.children}</Subcategories>}
      </div>
    );
  }
}

export default Menu;
