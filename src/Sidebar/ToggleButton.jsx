import React from 'react';
import styled from 'styled-components';

import media from './../utils/media';

const ToggleButton = styled.button`
  width: 55px;
  height: 30px;
  margin: 15px;
  padding: 0;
  align-self: center;
  background: url(${require('./menu.svg')}) no-repeat center;
  border: none;
  outline: none;
  ${media.small`
    display: none;
  `}
`;

export default props => <ToggleButton onClick={props.toggle} />;
