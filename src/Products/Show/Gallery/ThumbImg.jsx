import React from 'react';
import styled from 'styled-components';

import Image from '../../../components/Image';

const ThumbNails = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const ThumbImg = styled.button`
  box-sizing: padding-box;
  margin: 5px;
  max-width: 18%;
  cursor: pointer;
  flex: 1 0 100%;
  background-color: transparent;
  outline: none
  border: 4px solid ${props => (props.selected ? '#d8d8d8' : 'transparent')};
  &:hover {
    border-color: #d8d8d8;
  }
`;

export default props => (
  <ThumbNails>
    {props.images.map((img, index) =>
      (<ThumbImg
        key={img}
        selected={index === props.selected}
        onClick={() => props.select(index)}
      >
        <Image src={require(`${img}`)} />
      </ThumbImg>))}
  </ThumbNails>
);
