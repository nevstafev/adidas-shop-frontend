import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { connect } from 'react-redux';

import media from './../../utils/media';
import { getCoverImageUrl } from './../../utils/image';
import Card from './Card';
import Button from './Filters/Button';
import Price from './../../components/Price';
import { fetchProducts, toggleFilter, resetFilter } from '../../actions';

const Wrapper = styled.main`
  background-color: #ffffff;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  flex: 1 100%;
`;

const Filter = styled.nav`
  display: block;
  width: 100%;
  padding: 80px 15px 15px 15px;
  border-bottom: 3px solid #e7e7e7;
  ${media.small`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;
    align-self: flex-start;
    flex: 1 0 100%;
  `};
`;

const Icon = styled.div`
  display: none;
  width: 55px;
  height: 55px;
  margin-left: 25px;
  margin-right: 30px;
  background: url(${require('./filter.png')}) no-repeat center #ebebeb;
  ${media.small`
    display: block;
  `};
`;

const Size = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

const SizeButton = styled(Button)`
  padding: 0px 3px;
  ${props => props.isSelected && 'color: #4d42f8'};
`;

const Reset = styled(Button)`
  color: #4d42f8;
  margin-right: 15px;
`;

const StyledLink = styled(Link)`
  font-family: AvenirNext;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.366;
  text-decoration: none;
  color: ${props => (props.isSale ? '#ffffff' : '#0d0d0d')};
  background-color: #ffffff;
  ${props => props.isSale && 'background-image: linear-gradient(107deg, #0c09bf, #966dd8)'};
  text-align: center;
  flex: 1 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-top: 6px;
`;

const List = styled.div`
  flex-basis: 100%;
  padding: 15px 15px 0 15px;
  ${media.small`
    padding: 16px 25px 10px 25px;
  `};
`;

const CardCol = props => (
  <Col xs={12} sm={6} md={4}>
    {props.children}
  </Col>
);

class Products extends Component {
  componentDidMount() {
    const { loadProducts, category } = this.props;
    loadProducts(category);
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      const { loadProducts, category } = this.props;
      loadProducts(category);
    }
  }

  render() {
    return (
      <Wrapper>
        <Filter>
          <Icon />
          <Size>
            <Reset onClick={this.props.handleReset}>Size</Reset>
            {this.props.sizes.map((size, index) => (
              <SizeButton
                key={size}
                isSelected={this.props.filter.includes(index)}
                onClick={() => this.props.handleSelect(index)}
              >
                {size}
              </SizeButton>
            ))}
          </Size>
        </Filter>
        <List>
          <Row>
            {this.props.products
              .filter(product =>
                product.sizes.some(
                  size =>
                    !this.props.filter.length ||
                    this.props.filter.some(filterIndex => this.props.sizes[filterIndex] === size),
                ),
              )
              .map(product => (
                <CardCol key={product.id}>
                  <Card image={getCoverImageUrl(product.images)}>
                    <StyledLink to={product.id}>
                      <Price currency={product.currency}>{product.price}</Price>
                    </StyledLink>
                  </Card>
                </CardCol>
              ))}
          </Row>
        </List>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSelect: index => dispatch(toggleFilter(index, ownProps.match.url)),
  handleReset: () => dispatch(resetFilter(ownProps.match.url)),
  loadProducts: category => dispatch(fetchProducts(category)),
});

const mapStateToProps = (state, ownProps) => {
  const { productsByCategory } = state;
  const { isFetching, products, sizes, filter } = productsByCategory[ownProps.match.url] || {
    products: [],
    isFetching: true,
    sizes: [],
    filter: [],
  };

  return {
    isFetching,
    products,
    category: ownProps.match.url,
    sizes: [...sizes],
    filter,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
