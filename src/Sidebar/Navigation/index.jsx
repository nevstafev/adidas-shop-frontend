import React, { Component } from 'react';
import styled from 'styled-components';

import media from './../../utils/media';
import { Category, CategorySelected } from './Category';
import { Subcategory, SubcategorySelected } from './Subcategory';

const Categories = styled.nav`
  display: ${function (props) {
    return props.isVisible ? 'block' : 'none';
  }};
  text-decoration: none;
  text-align: center;
  ${media.small`
    display: block;
    text-transform: uppercase;
    align-self: center;
  `}
`;

const Subcategories = styled.nav`
  text-align: center;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      selectedCategory: '',
      selectedSubcategory: '',
    };
  }

  render() {
    return (
      <Categories isVisible={this.props.isVisible}>
        <CategorySelected to="#">Sports</CategorySelected>
        <Subcategories>
          <SubcategorySelected to="#">Shoes</SubcategorySelected>
          <Subcategory to="#">Clothing</Subcategory>
          <Subcategory to="#">Accessories</Subcategory>
        </Subcategories>
        <Category to="#">Brands</Category>
        <Category to="#">Micoach</Category>
      </Categories>
    );
  }
}

export default Navigation;
