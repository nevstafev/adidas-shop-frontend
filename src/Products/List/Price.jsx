import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  font-family: AvenirNext;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.366;
  text-decoration: none;
  color: ${props => (props.isSale ? '#ffffff' : '#0d0d0d')};
  background-color: #ffffff;
  ${props => props.isSale && 'background-image: linear-gradient(107deg, #0c09bf, #966dd8)'};
  text-align: center;
  flex: 1 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-top: 6px;
`;

export default StyledLink;
