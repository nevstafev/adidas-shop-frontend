import React from 'react';
import styled from 'styled-components';

const Thumbnails = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: center;
`;

export default (props) => {
  const { children } = props;
  return (<Thumbnails>{children}</Thumbnails>);
};
