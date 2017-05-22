import React, { Component } from 'react';
import styled from 'styled-components';

import media from './../utils/media';
import Logo from './Logo';
import Search from './Search';
import Navigation from './Navigation';
import Menu from './Menu';

const Wrapper = styled.aside`
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
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex: 1 0 327px;
  `}
  ${media.medium`
    flex: 1 0 414px;
  `}
`;

class Sidebar extends Component {
  constructor() {
    super();
    this.state = { isMenuContentVisible: false };
    this.switchMenuVisibleState = this.switchMenuVisibleState.bind(this);
  }

  switchMenuVisibleState() {
    this.setState(prevState => ({ isMenuContentVisible: !prevState.isMenuContentVisible }));
  }

  render() {
    return (<Wrapper>
      <Logo />
      <Menu switchMenuState={this.switchMenuVisibleState} />
      <Search isVisible={this.state.isMenuContentVisible} />
      <Navigation isVisible={this.state.isMenuContentVisible} />
    </Wrapper>);
  }
}

export default Sidebar;
