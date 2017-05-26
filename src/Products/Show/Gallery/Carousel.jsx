import React, { Component } from 'react';
import styled from 'styled-components';

import Cover from './Cover';
import Thumbnails from './Thumbnails';
import Button from './Thumbnails/Button';
import Image from '../../../components/Image';

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
        <Thumbnails>
          {this.props.images.map((img, index) => (
            <Button
              key={img}
              isSelected={index === this.state.selected}
              onClick={() => this.handleSelect(index)}
            >
              <Image src={img} />
            </Button>
          ))}
        </Thumbnails>
      </Wrapper>
    );
  }
}

export default Carousel;
