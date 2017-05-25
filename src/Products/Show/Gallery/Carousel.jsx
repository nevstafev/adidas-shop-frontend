import React, { Component } from 'react';
import styled from 'styled-components';

import Cover from './Cover';
import ThumbNail from './Thumbnail';
import ThumbImg from './Thumbnail/Image';
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
    const thumbImages = this.props.images.map(
      (img, index) => (
        <ThumbImg
          key={img}
          isSelected={index === this.state.selected}
          onClick={() => this.handleSelect(index)}
        >
          <Image src={img} />
        </ThumbImg>
      ), this);

    return (
      <Wrapper>
        <Cover image={this.props.images[this.state.selected]} />
        <ThumbNail>
          {thumbImages}
        </ThumbNail>
      </Wrapper>
    );
  }
}

export default Carousel;
