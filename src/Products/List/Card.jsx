import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import media from '../../utils/media';
import Image from '../../components/Image';
import Label from '../../components/Label';

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
  color: #0d0d0d;
  text-align: center;
  background-color: #ffffff;
  flex: 1 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-top: 6px;
`;

const SalePrice = styled(StyledLink)`
  background-image: linear-gradient(107deg, #0c09bf, #966dd8);
  color: #ffffff;
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

export default () => (
  <Wrapper>
    <Image src={require('./dark.png')} />
    <SalePrice to="/product">
      $170
    </SalePrice>
    <Sale>Sale</Sale>
  </Wrapper>
);
