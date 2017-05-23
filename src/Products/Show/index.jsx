import React from 'react';
import styled from 'styled-components';

import media from './../../utils/media';
import Header from './Header';
import Description from './Description';
import Carousel from './Gallery/Carousel';

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
      <Carousel
        images={[
          './dark-front.png',
          './dark-pair-back.jpg',
          './dark-pair.jpg',
          './dark-pair-left-side.png',
        ]}
      />
      <Description />
    </Product>
    <ButtonWrapper>
      <Button>
        Buy now
      </Button>
    </ButtonWrapper>
  </Wrapper>
);
