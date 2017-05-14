import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f4f4f4;
  padding: 6px 9px 9px 8px;
  margin-bottom: 24px;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const StyledLink = styled(Link)`
  font-family: "AvenirNext";
  font-weight: bold;
  font-size: 30px;
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

const SaleLabel = styled.span`
  font-family: "AvenirNext";
  font-weight: normal;
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  font-style: normal !important;
  color: #ffffff;
  position: absolute;
  top: 13px;
  right: 16px;
  background-color: #ff5c5c;
  padding: 7px 20px 6px 21px;
`;

export default () => (
  <Wrapper>
    <Image src={require('./dark.png')} />
    <SalePrice to="/product">
        $170
      </SalePrice>
    <SaleLabel >sale</SaleLabel>
  </Wrapper>
  );
