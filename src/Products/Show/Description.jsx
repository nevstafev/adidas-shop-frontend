import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  padding-left: 15px;
  padding-right: 15px;
  font: bold 20px/1.4 AvenirNextReg;
  color: #d8d8d8;
  padding-bottom: 80px;
  @media screen and (min-width: 768px) {
    padding-left: 34px;
    padding-right: 64px;
    padding-bottom: 150px;
    font-family: "AvenirNextReg";
    font-size: 33px;
    font-weight: 800;
    color: #d8d8d8;
    line-height: 1.52;  
  }
`;

const Strong = styled.span`
  color: #6e6e6e;
`;

export default () => (
  <Wrapper>
    <Strong>Adidas</Strong>
    {' '}
      is a German multinational
      corporation,
      headquartered in
      Herzogenaurach, Germany, that designs and
      manufactures shoes, clothing and accessories.
    </Wrapper>
  );
