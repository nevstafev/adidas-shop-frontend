import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import media from './../../utils/media';
import getCoverImage from './../../utils/image';
import { get } from '../../api';
import Card from './Card';
import Button from './Filters/Button';
import Price from './Price';

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
    get(`/v1/${props.match.url}`).then(r => r.json()).then((json) => {
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
            {this.state.sizes.map((filter, index) => (
              <SizeButton
                key={filter}
                isSelected={this.state.filters.includes(
                  this.state.sizes[index],
                )}
                onClick={() => this.handleSelect(index)}
              >
                {filter}
              </SizeButton>
            ))}
          </Size>
        </Filter>
        <List>
          <Row>
            {this.state.list
              .filter(
                item =>
                  (this.state.filters.length === 0
                    ? true
                    : this.state.filters.some(f => item.sizes.includes(f))))
              .map(item => (
                <CardCol key={item.id}>
                  <Card image={getCoverImage(item.images)}>
                    <Price to={item.id} currency={item.currency}>
                      {item.price}
                    </Price>
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
