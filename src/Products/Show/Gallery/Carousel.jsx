import React, { Component } from 'react';
import styled from 'styled-components';

import Cover from './Cover';
import ThumbNails from './ThumbNails';

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
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selected) {
    this.setState({ selected });
  }

  render() {
    return (
      <Wrapper>
        <Cover image={this.props.images[this.state.selected]} />
        <ThumbNails
          images={this.props.images}
          selected={this.state.selected}
          handleSelect={this.handleSelect}
        />
      </Wrapper>
    );
  }
}

export default Carousel;
