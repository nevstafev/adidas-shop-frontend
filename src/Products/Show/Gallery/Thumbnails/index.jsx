import React from 'react';
import styled from 'styled-components';

const Thumbnails = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

export default props => <Thumbnails>{props.children}</Thumbnails>;
