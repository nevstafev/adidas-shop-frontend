import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import media from '../../utils/media';
import { getCoverImageUrl } from '../../utils/image';
import Card from './Card';
import Button from './Filters/Button';
import Price from '../../components/Price';
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
  ${(props) => props.isSelected && 'color: #4d42f8'};
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
  color: ${(props) => (props.isSale ? '#ffffff' : '#0d0d0d')};
  background-color: #ffffff;
  ${(props) => props.isSale && 'background-image: linear-gradient(107deg, #0c09bf, #966dd8)'};
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

const CardCol = ({ children }) => (
  <Col xs={12} sm={6} md={4}>
    {children}
  </Col>
);

const Products = (props) => {
  const { match: { url: category } } = props;
  const productsByCategory = useSelector((state) => state.productsByCategory);
  const dispatch = useDispatch();

  const {
    products, sizes, filter,
  } = productsByCategory[category] || {
    products: [],
    isFetching: true,
    sizes: [],
    filter: [],
  };

  useEffect(() => { dispatch(fetchProducts(category)); }, [category, dispatch]);

  return (
    <Wrapper>
      <Filter>
        <Icon />
        <Size>
          <Reset onClick={() => dispatch(resetFilter(category))}>Size</Reset>
          {sizes.map((size, index) => (
            <SizeButton
              key={size}
              isSelected={filter.includes(index)}
              onClick={() => dispatch(toggleFilter(index, category))}
            >
              {size}
            </SizeButton>
          ))}
        </Size>
      </Filter>
      <List>
        <Row>
          {products
            .filter((product) => product.sizes.some(
              (size) => !filter.length
                || filter.some((filterIndex) => sizes[filterIndex] === size),
            ))
            .map((product) => (
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
};

export default Products;
