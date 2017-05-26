import React from 'react';
import styled from 'styled-components';

import media from '../../../utils/media';
import Image from '../../../components/Image';

const ImageWrapper = styled.div`
  text-align: center;
  flex: 2 0 100%;
  height: 250px;
  line-height: 250px;
  ${media.small`
    height: 525px;
    line-height: 525px;
  `}
`;

export default props => (
  <ImageWrapper>
    <Image src={props.image} />
  </ImageWrapper>
);
