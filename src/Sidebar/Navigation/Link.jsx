import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: block;
  font-family: "AndaleMono";
  font-size: 24px;
  text-decoration: none;
  color: #3c3c3c;
  margin-bottom: 5px;
  &:hover {
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;
