import styled from 'styled-components';

const Button = styled.button`
  box-sizing: padding-box;
  padding: 0px;
  cursor: pointer;
  background-color: transparent;
  outline: none
  border: 4px solid ${props => (props.isSelected ? '#d8d8d8' : 'transparent')};
  &:hover {
    border-color: #d8d8d8;
  }
`;

export default Button;
