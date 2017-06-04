import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import media from '../../utils/media';
import Label from '../../components/Label';

const Image = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 10px;
  margin-bottom: 30px;
  flex-flow: column nowrap;
  background-color: #f4f4f4;
  ${media.small`
    margin: 4px 4px 20px 4px;
  `}
`;

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

const Sale = styled(Label)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 25px;
  ${media.small`
    top: 20px;
    right: 20px;
    padding: 5px 20px;
  `}
`;

export default props => (
  <Wrapper>
    <Image src={props.image} />
    <StyledLink isSale={props.isSale} to={props.to}>
      {props.price}
    </StyledLink>
    {props.isSale && <Sale>Sale</Sale>}
  </Wrapper>
);
