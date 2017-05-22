import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Category = styled(Link)`
  font-family: "AvenirNext";
  font-size: 24px;
  font-weight: bold;
  color: #303030;
  text-decoration: none;
  margin-bottom: 30px;
  display: block;
  &:hover {
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }
`;

const CategorySelected = styled(Category)`
  color: #ffffff;
  position: relative;
  &:after {
    position: absolute;
    content: url(${require('./collapse.svg')});
    margin-left: 5px;
  }
`;

export { Category, CategorySelected };
