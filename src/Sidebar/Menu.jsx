import React from 'react';
import styled from 'styled-components';

import media from './../utils/media';

const Menu = styled.button`
  width: 55px;
  height: 30px;
  margin: 15px;
  padding: 0;
  align-self: center;
  background: url(${require('./menu.svg')}) no-repeat center;
  border: none;
  margin-right: auto;
  ${media.small`
    display: none;
  `}
`;

export default props => (<Menu onClick={props.switchMenuState} />);
