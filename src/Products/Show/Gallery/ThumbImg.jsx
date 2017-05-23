import React from 'react';
import styled from 'styled-components';

import Image from '../../../components/Image';

const ThumbNails = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const ThumbImg = styled.button`
  box-sizing: padding-box;
  margin: 5px;
  max-width: 18%;
  cursor: pointer;
  flex: 1 0 100%;
  background-color: transparent;
  outline: none
  border: 4px solid transparent;
  &:hover {
    border-color: #d8d8d8;
  }
`;

export default () => (
  <ThumbNails>
    <ThumbImg><Image src={require('./dark-front.png')} /></ThumbImg>
    <ThumbImg><Image src={require('./dark-pair-back.jpg')} /></ThumbImg>
    <ThumbImg><Image src={require('./dark-pair.jpg')} /></ThumbImg>
    <ThumbImg><Image src={require('./dark-pair-left-side.png')} /></ThumbImg>
  </ThumbNails>
);
