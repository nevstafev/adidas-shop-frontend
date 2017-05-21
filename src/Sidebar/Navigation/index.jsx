import React from 'react';
import styled from 'styled-components';

import { Category, CategorySelected } from './Category';
import { Subcategory, SubcategorySelected } from './Subcategory';

const Categories = styled.nav`
  display: none;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    display: block;
    text-align: center;
    text-transform: uppercase;
    align-self: center;
  }
`;

const Subcategories = styled.nav`
  text-align: center;
  margin-bottom: 50px;
`;

export default () =>
  (
    <Categories>
      <CategorySelected to="#">Sports</CategorySelected>
      <Subcategories>
        <SubcategorySelected to="#">Shoes</SubcategorySelected>
        <Subcategory to="#">Clothing</Subcategory>
        <Subcategory to="#">Accessories</Subcategory>
      </Subcategories>
      <Category to="#">Brands</Category>
      <Category to="#">Micoach</Category>
    </Categories>);

