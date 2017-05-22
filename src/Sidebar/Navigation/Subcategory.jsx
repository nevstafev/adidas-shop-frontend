import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Subcategory = styled(Link)`
  display: block;
  font-family: "AndaleMono";
  font-size: 24px;
  text-decoration: none;
  color: #3c3c3c;
  margin-bottom: 25px;
  &:hover {
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }
`;

const SubcategorySelected = styled(Subcategory)`
  color: #ffffff;
`;

export { Subcategory, SubcategorySelected };
