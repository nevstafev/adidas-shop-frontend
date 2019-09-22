import React, { useState } from 'react';
import styled from 'styled-components';

import media from '../utils/media';
import Logo from './Logo';
import Search from './Search';
import Navigation from './Navigation';
import ToggleButton from './ToggleButton';

const Aside = styled.aside`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: #0e0e0e;
  ${media.small`
    position: static;
    height: initial;
    align-content: flex-start;
    flex: 1 0 327px;
    max-width: 327px;
  `}
  ${media.medium`
    flex: 1 0 414px;
    max-width: 414px;
  `}
`;

const Wrapper = styled.div`
  margin: 0 20px;
  width: 100%;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  ${media.small`
    display: block;
  `}
`;


export default () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <Aside>
      <Logo />
      <ToggleButton toggle={() => { setVisible(!isVisible); }} />
      <Wrapper isVisible={isVisible}>
        <Search />
        <Navigation />
      </Wrapper>
    </Aside>
  );
};
