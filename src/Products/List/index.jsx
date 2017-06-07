import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import media from './../../utils/media';
import getCoverImage from './../../utils/image';
import { get } from '../../api';
import Card from './Card';
import Button from './Filters/Button';
import Price from './../../components/Price';

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
  `}
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
  `}
`;

// const Gender = styled.div`
//   display: flex;
//   padding-bottom: 10px;
//   align-items: center;
//   ${media.small`
//     padding-bottom: 0;
//   `}
// `;
//
// const GenderButton = styled(Button)`
//   padding: 0 15px 0 0;
// `;

const Size = styled.div`
  display: flex;
  align-items: center;
`;

const SizeButton = styled(Button)`
  padding: 0px 3px;
  ${props => props.isSelected && 'color: #4d42f8'}
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
  `}
`;

const CardCol = props => <Col xs={12} sm={6} md={4}>{props.children}</Col>;

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], sizes: [], filters: [] };
    this.load = this.load.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.load(nextProps);
    this.setState({ filters: [] });
  }

  load(props) {
    const filterSizes = new Set();
    get(`/v1/${props.match.url}`).then((json) => {
      json.items.forEach(item =>
        item.sizes.forEach(size => filterSizes.add(size)),
      );
      this.setState({ list: json.items, sizes: [...filterSizes] });
    });
  }

  handleSelect(index) {
    this.setState((prevState) => {
      const selected = this.state.sizes[index];
      if (prevState.filters.includes(selected)) {
        prevState.filters.splice(prevState.filters.indexOf(selected), 1);
      } else {
        prevState.filters.push(selected);
      }

      return { filters: prevState.filters };
    });
  }

  handleReset() {
    this.setState({ filters: [] });
  }

  render() {
    return (
      <Wrapper>
        <Filter>
          <Icon />
          {/* <Gender>*/}
          {/* <GenderButton>Man</GenderButton>*/}
          {/* <GenderButton>Woman</GenderButton>*/}
          {/* </Gender>*/}
          <Size>
            <Reset onClick={this.handleReset}>Size</Reset>
            {this.state.sizes.map((size, index) => (
              <SizeButton
                key={size}
                isSelected={this.state.filters.includes(this.state.sizes[index])}
                onClick={() => this.handleSelect(index)}
              >
                {size}
              </SizeButton>
            ))}
          </Size>
        </Filter>
        <List>
          <Row>
            {this.state.list
              .filter(item =>
                item.sizes.some(s =>
                    !this.state.filters.length || this.state.filters.includes(s)))
              .map(item => (
                <CardCol key={item.id}>
                  <Card image={getCoverImage(item.images)}>
                    <StyledLink to={item.id}>
                      <Price currency={item.currency}>{item.price}</Price>
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

export default Products;
