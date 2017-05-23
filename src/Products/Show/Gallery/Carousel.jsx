import React, { Component } from 'react';
import styled from 'styled-components';

import Cover from './Cover';
import ThumbImg from './ThumbImg';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex: 0 0 100%;
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
    this.select = this.select.bind(this);
  }

  select(selected) {
    this.setState({ selected });
  }

  render() {
    return (
      <Wrapper>
        <Cover image={this.props.images[this.state.selected]} />
        <ThumbImg images={this.props.images} selected={this.state.selected} select={this.select} />
      </Wrapper>
    );
  }
}

export default Carousel;
