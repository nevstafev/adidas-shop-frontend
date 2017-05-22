import React from 'react';
import styled from 'styled-components';

import Image from '../../../components/Image';

const ImageWrapper = styled.div`
  text-align: center;
  flex: 2 0 100%;
`;

export default () => (
  <ImageWrapper>
    <Image src={require('./dark-big.png')} />
  </ImageWrapper>
);
