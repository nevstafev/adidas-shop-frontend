import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import media from '../../utils/media';
import { getImageUrl } from '../../utils/image';
import Header from './Header';
import Description from './Description';
import Carousel from './Gallery/Carousel';
import { fetchItem } from '../../actions';

const Wrapper = styled.main`display: block;`;

const Product = styled.div`
  font-family: 'AvenirNext';
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
  `};
`;

const Button = styled.button`
  padding-top: 25px;
  padding-bottom: 25px;
  font-family: AvenirNext;
  font-size: 20px;
  font-weight: normal;
  line-height: 1.35;
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
  `};
`;

class Show extends Component {
  componentDidMount() {
    const { loadItemInfo, path } = this.props;
    loadItemInfo(path);
  }

  componentDidUpdate(prevProps) {
    const { path } = this.props;
    if (path !== prevProps.path) {
      const { loadItemInfo } = this.props;
      loadItemInfo(path);
    }
  }

  render() {
    const {
      isFetching, title, currency, price, images, description,
    } = this.props;
    return (
      isFetching !== true && (
        <Wrapper>
          <Product>
            <Header
              title={title}
              currency={currency}
              price={price}
            />
            <Carousel images={images.map(getImageUrl)} />
            <Description text={description} />
          </Product>
          <ButtonWrapper>
            <Button>Buy now</Button>
          </ButtonWrapper>
        </Wrapper>
      )
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { visibleItem } = state;
  const {
    title, currency, price, images, description,
  } = visibleItem.item || {
    title: '',
    currency: '',
    price: '',
    images: [],
    description: '',
  };
  return {
    title,
    currency,
    price,
    images,
    description,
    path: ownProps.match.url,
    isFetching: visibleItem.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadItemInfo: (path) => dispatch(fetchItem(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
