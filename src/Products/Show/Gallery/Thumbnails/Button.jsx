import styled from 'styled-components';

const Button = styled.button`
  box-sizing: padding-box;
  margin: 5px;
  max-width: 18%;
  cursor: pointer;
  flex: 1 0 100%;
  background-color: transparent;
  outline: none
  border: 4px solid ${props => (props.isSelected ? '#d8d8d8' : 'transparent')};
  &:hover {
    border-color: #d8d8d8;
  }
`;

export default Button;
