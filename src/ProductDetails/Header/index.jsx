import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  flex: 0 0 100%;
  padding-top: 25px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-self: flex-start;
  max-height: 40px;
  z-index: 1;
  position: relative;
`;

const LeftHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-left: 28px;
  position: relative;
`;

const Name = styled.h1`
  font-family: AvenirNext;
  font-size: 64px;
  font-weight: bold;
  color: #3a3a3a;
  text-transform: uppercase;
  margin-bottom: 25px;
  margin-top: 0px;
`;

const Save = styled.button`
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
`;

const RightHeader = styled.div`
  z-index: 2;
  position: absolute;
  top: 35px;
  right: 37px;
  display: flex;
  flex-flow: column nowrap;
`;

const ColorSelector = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`;

const Color = styled.button`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 13px;
  background-color: ${param => param.color};
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  outline: none;
`;

const Sale = styled.span`
  margin-left: 17px;
  font-size: 14px;
  color: #ffffff;
  background-color: #ff5c5c;
  padding: 7px 20px 6px 21px;
  text-transform: uppercase;
`;

const Price = styled.h2`
  font-size: 80px;
  font-weight: bold;
  color: #e2e2e2;
  margin-top: 35px;
`;

export default () => {
  return (
    <Wrapper>
      <LeftHeader>
        <Name>Ultra<br />Boost</Name>
        <Save>Save</Save>
      </LeftHeader>
      <RightHeader>
        <ColorSelector>
          <Color color="#c5c5c5" />
          <Color color="#4d87ca" />
          <Color color="#4a4a4a" />
          <Color color="#e0e0e0" />
          <Sale>sale</Sale>
        </ColorSelector>
        <Price>$170</Price>
      </RightHeader>
    </Wrapper>
  );
};
