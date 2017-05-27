import React, { Component } from 'react';
import styled from 'styled-components';

import media from './../utils/media';
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
  display: ${props => (props.isVisible ? 'block' : 'none')};
  ${media.small`
    display: block;
  `}
`;

class Sidebar extends Component {
  constructor() {
    super();
    this.state = { isVisible: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }));
  }

  render() {
    return (
      <Aside>
        <Logo />
        <ToggleButton toggle={this.toggle} />
        <Wrapper isVisible={this.state.isVisible}>
          <Search />
          <Navigation />
        </Wrapper>
      </Aside>
    );
  }
}

export default Sidebar;
