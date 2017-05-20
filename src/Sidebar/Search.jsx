import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: none;
  width: 100%;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    display: inline;
    align-self: flex-start;
  }
`;

const Input = styled.input`
  width: 100%;
  color: #fff;
  padding-left: 55px;
  font-size: 24px;
  border: 0;
  border-bottom: 4px solid #373737;
  height: 2em;
  opacity: 0.56;
  background: #0e0e0e url(${require('./search.svg')}) no-repeat 10px 4px;
  margin-bottom: 100px;
  &:focus {
    outline: none;
  }
`;

export default () => (
  <Form action="#" method="get">
    <Input type="search" />
  </Form>
  );
