import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
`;

const Edge = styled.div`
  height: 3px;
  border-radius: 1px;
  background-color: #e7e7e7;
  margin-top: 3px;
  margin-right: 28px;
  margin-left: 28px;
`;

export default () => (
  <Wrapper>
    <Edge />
    <Edge />
    <Edge />
  </Wrapper>
  );
