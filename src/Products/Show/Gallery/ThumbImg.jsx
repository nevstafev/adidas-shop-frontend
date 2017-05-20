import React from 'react';
import styled from 'styled-components';

import Image from '../../../components/Image';

const ThumbNail = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: space-around; 
  }
`;

const ThumbImg = styled.div`
  margin: 5px;
  max-width: 18%;
  cursor: pointer;
  flex: 1 0 100%;
  outline: ${props => (props.isSelected ? '4px solid #d8d8d8' : 'none')};
  &:hover {
    outline: 4px solid #d8d8d8;
  }
`;

export default () => (
  <ThumbNail>
    <ThumbImg><Image src={require('./dark-front.png')} /></ThumbImg>
    <ThumbImg><Image src={require('./dark-pair-back.jpg')} /></ThumbImg>
    <ThumbImg><Image src={require('./dark-pair.jpg')} /></ThumbImg>
    <ThumbImg><Image src={require('./dark-pair-left-side.png')} /></ThumbImg>
  </ThumbNail>
  );
