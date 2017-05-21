import React from 'react';
import styled from 'styled-components';

import Label from '../../components/Label';

const Wrapper = styled.header`
  flex: 0 0 100%;
  align-self: flex-start;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-top: 100px;
  @media screen and (min-width:768px) {
    flex-flow: row nowrap;
    padding-top: 25px;
    max-height: 40px;
    z-index: 1;
    position: relative;
  }
`;

const LeftHeader = styled.div`
  position: relative;
  padding-left: 15px;
  @media screen and (min-width:768px) {
    max-width: 230px;
    display: flex;
    flex-flow: column wrap;
    padding-left: 28px;
  }
`;

const Name = styled.h1`
  margin: 0px;
  font-family: AvenirNext;
  font-size: 36px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  color: #393939;
  @media screen and (min-width: 768px) {
    overflow-wrap: break-word;
    font-size: 64px;
    margin-bottom: 25px;
    margin-top: 0px;
  }
`;

const Save = styled.button`
  display: none;
  height: 75px;
  width: 75px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 50%;
  background-color: #e3e3e3;
  position: absolute;
  top: 168px;
  left: 28px;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  outline: none;
  &:hover {
    background-color: #4d42f8;
  }
  @media screen and (min-width: 768px) {
    display: inline;
  }
`;

const RightHeader = styled.div`
  display: flex;
  flex-flow: column-reverse;
  flex: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (min-width:768px) {
    z-index: 2;
    position: absolute;
    top: 35px;
    right: 37px;
    flex-flow: column nowrap;
  }
`;

const ColorSelector = styled.div`
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width:768px) {
    flex-flow: row nowrap;
    justify-content: flex-end;
  }
`;

const Color = styled.button`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: ${param => param.color};
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  outline: none;
`;

const Sale = styled(Label)`
  margin-right: auto;
  padding: 7px 20px 6px 21px;
  @media screen and (min-width:768px) {  
    margin-left: 17px;
    margin-right: 0;
  }
`;

const Price = styled.h2`
  padding-bottom: 15px;
  padding-top: 10px;
  margin: 0px;
  font-family: AvenirNext;
  font-size: 80px;
  font-weight: bold;
  line-height: 1;
  color: #e2e2e2;
  @media screen and (min-width:768px) {  
    margin-top: 35px;
  }
`;

export default () => (
  <Wrapper>
    <LeftHeader>
      <Name>Ultra Boost</Name>
      <Save>Save</Save>
    </LeftHeader>
    <RightHeader>
      <ColorSelector>
        <Color color="#c5c5c5" />
        <Color color="#4d87ca" />
        <Color color="#4a4a4a" />
        <Color color="#e0e0e0" />
        <Sale>Sale</Sale>
      </ColorSelector>
      <Price>$170</Price>
    </RightHeader>
  </Wrapper>
);
