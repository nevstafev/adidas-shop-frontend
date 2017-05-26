import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import media from './../../utils/media';

const Button = styled.button`
  font-family: "AvenirNext";
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border: none;
  outline: none;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:after {
    display: inline-block;
    position: absolute;
    content: url(${require('./collapse.svg')});
    ${props => props.isOpened && 'transform: rotate(180deg)'};
    margin-left: 5px;
  }
  ${media.small`
    margin-bottom: 30px;
  `}
`;

const Subcategories = styled.nav`
  text-align: center;
  margin-bottom: 10px;
  transition-property: all;
  transition-duration: 1s;
  ${media.small`
    margin-bottom: 50px;
  `}
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    const isOpened = props.location.pathname.indexOf(props.title.toLowerCase()) > -1;
    this.state = { isOpened };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    return (
      <div>
        <Button isOpened={this.state.isOpened} onClick={this.toggle}>
          {this.props.title}
        </Button>
        {this.state.isOpened &&
          <Subcategories>{this.props.children}</Subcategories>}
      </div>
    );
  }
}

export default withRouter(Menu);
