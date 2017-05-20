import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Cover from './Gallery/Cover';
import Description from './Description';
import ThumbImg from './Gallery/ThumbImg';

const Wrapper = styled.main`
  display: block;
`;

const Product = styled.div`
  font-family: "AvenirNext";
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex: 1 100%; 
`;

const View = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex: 0 0 100%;
`;

const ButtonWraper = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  @media screen and (min-width: 768px) {
    left: 327px;
  }
  @media screen and (min-width: 1024px) {
    left: 414px;
  }
`;

const Button = styled.button`
  padding-top: 25px;
  padding-bottom: 25px;
  font: normal 20px/1.35 AvenirNext;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  outline: none;
  width: 100%;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  @media screen and (min-width: 768px) {
    font-size: 32px;
    color: #ffffff;
    padding-top: 34px;
    padding-bottom: 37px;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

export default () => (
  <Wrapper>
    <Product>
      <Header />
      <View>
        <Cover />
        <ThumbImg />
      </View>
      <Description />
    </Product>
    <ButtonWraper>
      <Button>
      Buy now
      </Button>
    </ButtonWraper>
  </Wrapper>
);
