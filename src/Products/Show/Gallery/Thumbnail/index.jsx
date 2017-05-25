import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

export default props => <Wrapper>{props.children}</Wrapper>;
