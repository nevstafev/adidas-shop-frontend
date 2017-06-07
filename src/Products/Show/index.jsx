import React, { Component } from 'react';
import styled from 'styled-components';

import media from './../../utils/media';
import { getImageUrl } from './../../utils/images';
import { get } from './../../api';
import Header from './Header';
import Description from './Description';
import Carousel from './Gallery/Carousel';

const Wrapper = styled.main`
  display: block;
`;

const Product = styled.div`
  font-family: "AvenirNext";
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex: 1 100%; 
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  ${media.small`
    left: 327px;`}
  ${media.medium`
    left: 414px;
  `}
`;

const Button = styled.button`
  padding-top: 25px;
  padding-bottom: 25px;
  font-family: AvenirNext;
  font-size: 20px;
  font-weight: normal;
  line-height: 1.35'
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  outline: none;
  width: 100%;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  ${media.small`
    font-size: 32px;
    color: #ffffff;
    padding-top: 35px;
    padding-bottom: 35px;
    cursor: pointer;
    text-transform: uppercase;
  `}
`;

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = { item: null };
  }

  componentDidMount() {
    get(`/v1/${this.props.match.url}`)
      .then(json => this.setState({ item: json }));
  }

  render() {
    return this.state.item && (
      <Wrapper>
        <Product>
          <Header title={this.state.item.title} price={this.state.item.price / 100} />
          <Carousel images={this.state.item.images.map(getImageUrl)} />
          <Description text={this.state.item.description} />
        </Product>
        <ButtonWrapper>
          <Button>
            Buy now
          </Button>
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

export default Show;
