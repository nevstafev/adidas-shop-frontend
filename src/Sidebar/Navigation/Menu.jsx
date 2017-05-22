import React, { Component } from 'react';
import styled from 'styled-components';

import media from './../../utils/media';

const Category = styled.button`
  font-family: "AvenirNext";
  font-size: 24px;
  font-weight: bold;
  color: ${function (props) { return props.isSelected ? '#ffffff' : '#303030'; }};
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border: none;
  outline: none;
  background-color: transparent;
  &:hover {
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }
  position: relative;
  ${props => props.isSelected &&
  `&:after {
    display: inline-block;
    position: absolute;
    content: url(${require('./collapse.svg')});
    transform: rotate(180deg);
    margin-left: 5px;
  }`}
  ${media.small`
    margin-bottom: 30px;
  `}
`;

const Subcategories = styled.nav`
  text-align: center;
  margin-bottom: 10px;
  transition-property: all;
  transition-duration: 1s;
  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

class Menu extends Component {
  constructor() {
    super();
    this.state = { isSelected: false };
    this.toggleSelection = this.toggleSelection.bind(this);
  }

  toggleSelection() {
    this.setState(prevState => ({ isSelected: !prevState.isSelected }));
  }

  render() {
    return (
      <div>
        <Category
          isSelected={this.state.isSelected}
          onClick={this.toggleSelection}
        >
          {this.props.title}
        </Category>
        {this.state.isSelected && <Subcategories>{this.props.children}</Subcategories>}
      </div>
    );
  }
}

export default Menu;
