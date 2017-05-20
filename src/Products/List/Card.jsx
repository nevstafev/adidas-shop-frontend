import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Image from '../../components/Image';
import Label from '../../components/Label';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 10px;
  margin-bottom: 30px;
  flex-flow: column nowrap;
  background-color: #f4f4f4;
  @media screen and (min-width: 768px) {
    margin: 4px 4px 20px 4px;
  }
`;

const StyledLink = styled(Link)`
  font: bold 30px/1.366 "AvenirNext";
  text-decoration: none;
  color: #0d0d0d;
  text-align: center;
  background-color: #ffffff;
  flex: 1 100%;
  padding-top: 23px;
  padding-bottom: 27px;
  margin-top: 8px;
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
  @media screen and (min-width: 768px) {
    top: 17px;
    right: 20px;
    padding: 5px 20px;
  }
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
