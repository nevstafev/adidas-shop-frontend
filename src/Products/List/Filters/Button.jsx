import styled from 'styled-components';

export default styled.button`
  padding: 0;
  border: none;
  font: 24px/1.375 "AvenirNext";
  text-transform: uppercase;
  color: #d6d6d6;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #4d42f8;
  }
  &:focus {
    outline: none;
  }
`;
