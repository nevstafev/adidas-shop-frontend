import React from 'react';
import styled from 'styled-components';

import media from './../../utils/media';
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

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  ${media.small`
    left: 327px;`}
  ${media.medium`
    left: 414px;
  `}
`;

const Button = styled.button`
  padding-top: 25px;
  padding-bottom: 25px;
  font-family: AvenirNext;
  font-size: 20px;
  font-weight: normal;
  line-height: 1.35'
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  outline: none;
  width: 100%;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  ${media.small`
    font-size: 32px;
    color: #ffffff;
    padding-top: 35px;
    padding-bottom: 35px;
    cursor: pointer;
    text-transform: uppercase;
  `}
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
    <ButtonWrapper>
      <Button>
        Buy now
      </Button>
    </ButtonWrapper>
  </Wrapper>
);
