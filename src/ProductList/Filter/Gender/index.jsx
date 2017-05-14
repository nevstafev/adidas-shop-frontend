import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  font-family: "AvenirNext";
  font-weight: bold;
  font-size: 24px;
  color: #d6d6d6;
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  padding: 0px 5px;
  cursor: pointer;
  &:hover {
    color: #4d42f8;
  }
  &:focus {
    outline: none;
  }
`;

const ButtonSelected = styled(Button)`
  color: #4d42f8;
`;

export default () => (
  <Wrapper>
    <ButtonSelected>Man</ButtonSelected>
    <Button>Woman</Button>
  </Wrapper>
  );
