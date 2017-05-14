import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-right: 5px;
  margin-left: 34px;
  cursor: pointer;
  flex: 1;
  outline: ${props => (props.isSelected ? '4px solid #d8d8d8' : 'none')};
  &:hover {
    outline: 4px solid #d8d8d8;
  }
`;

const Img = styled.img`
  width: 100%;
`;

export default () => (
  <Wrapper>
    <Img src={require('./dark-front.png')} />
  </Wrapper>
);
