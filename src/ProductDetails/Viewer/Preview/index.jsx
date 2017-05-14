import React from 'react';
import styled from 'styled-components';
import Separator from './Separator';
import Image from './Image';
import MorePhotos from './MorePhotos';

const Wrapper = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around; 
`;

export default () => (
  <Wrapper>
    <Image />
    <Image />
    <Image />
    <Image />
    <Separator />
    <MorePhotos />
  </Wrapper>
  );
