import React from 'react';
import styled from 'styled-components';

import media from '../../utils/media';
import Price from '../../components/Price';

const Wrapper = styled.header`
  flex: 0 0 100%;
  align-self: flex-start;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-top: 100px;
  ${media.small`
    flex-flow: row nowrap;
    padding-top: 25px;
    max-height: 40px;
    z-index: 1;
    position: relative;
  `}
`;

const LeftHeader = styled.div`
  position: relative;
  padding-left: 15px;
  ${media.small`
    max-width: 300px;
    display: flex;
    flex-flow: column wrap;
    padding-left: 28px;
  `}
`;

const Name = styled.h1`
  margin: 0px;
  font-family: AvenirNext;
  font-size: 36px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  color: #393939;
  ${media.small`
    overflow-wrap: break-word;
    font-size: 64px;
    margin-bottom: 25px;
    margin-top: 0px;
  `}
`;

const RightHeader = styled.div`
  display: flex;
  flex-flow: column-reverse;
  flex: 100%;
  padding-right: 15px;
  padding-left: 15px;
  ${media.small`
    z-index: 2;
    position: absolute;
    top: 20px;
    right: 30px;
    flex-flow: column nowrap;
  `}
`;

const PriceWrapper = styled.h2`
  padding-bottom: 15px;
  padding-top: 10px;
  margin: 0px;
  font-family: AvenirNext;
  font-size: 80px;
  font-weight: bold;
  line-height: 1;
  color: #393939;
`;


export default (props) => {
  const { currency, title, price } = props;
  return (
    <Wrapper>
      <LeftHeader>
        <Name>{title}</Name>
      </LeftHeader>
      <RightHeader>
        <PriceWrapper>
          <Price currency={currency}>{price}</Price>
        </PriceWrapper>
      </RightHeader>
    </Wrapper>
  );
};
