import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import media from './../../utils/media';
import getCoverImage from './../../utils/image';
import toSymbol from './../../utils/currency';
import { get } from '../../api';
import Card from './Card';
import Button from './Filters/Button';
import Label from './Filters/Label';
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

const Gender = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  ${media.small`
    padding-bottom: 0;
  `}
`;

const GenderButton = styled(Button)`
  padding: 0 15px 0 0;
`;

const Size = styled.div`
  display: flex;
  align-items: center;
`;

const SizeButton = styled(Button)`
  padding: 0px 3px;
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
    this.state = { list: [] };
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.load(nextProps);
  }

  load(props) {
    get(`/v1/products/${props.match.params.group}/${props.match.params.type}`)
      .then(r => r.json())
      .then(json => this.setState({ list: json.items }));
  }

  render() {
    return (
      <Wrapper>
        <Filter>
          <Icon />
          <Gender>
            <GenderButton>Man</GenderButton>
            <GenderButton>Woman</GenderButton>
          </Gender>
          <Size>
            <Label>Size</Label>
            <SizeButton>42</SizeButton>
          </Size>
        </Filter>
        <List>
          <Row>
            {this.state.list.map((item) => {
              return (
                <CardCol key={item.id}>
                  <Card image={getCoverImage(item.images)}>
                    <Price
                      to={item.id}
                    >{`${toSymbol(item.currency)}${item.price / 100}`}</Price>
                  </Card>
                </CardCol>
              );
            })}
          </Row>
        </List>
      </Wrapper>
    );
  }
}

export default Products;
