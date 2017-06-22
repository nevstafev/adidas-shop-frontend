import React, { Component } from 'react';
import styled from 'styled-components';

import media from './../../utils/media';
// import Label from '../../components/Label';
import Price from '../../components/Price';

const Wrapper = styled.header`
  flex: 0 0 100%;
  align-self: flex-start;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-top: 100px;
  ${media.small`
    flex-flow: row nowrap;
    padding-top: 25px;
    max-height: 40px;
    z-index: 1;
    position: relative;
  `}
`;

const LeftHeader = styled.div`
  position: relative;
  padding-left: 15px;
  ${media.small`
    max-width: 300px;
    display: flex;
    flex-flow: column wrap;
    padding-left: 28px;
  `}
`;

const Name = styled.h1`
  margin: 0px;
  font-family: AvenirNext;
  font-size: 36px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  color: #393939;
  ${media.small`
    overflow-wrap: break-word;
    font-size: 64px;
    margin-bottom: 25px;
    margin-top: 0px;
  `}
`;

// const Save = styled.button`
//   display: none;
//   height: 75px;
//   width: 75px;
//   color: #ffffff;
//   font-size: 18px;
//   font-weight: bold;
//   text-transform: uppercase;
//   border-radius: 50%;
//   background-color: ${props => props.color};
//   position: absolute;
//   top: 200px;
//   left: 28px;
//   cursor: pointer;
//   text-transform: uppercase;
//   border: none;
//   outline: none;
//   ${media.small`
//     display: inline;
//   `}
// `;

const RightHeader = styled.div`
  display: flex;
  flex-flow: column-reverse;
  flex: 100%;
  padding-right: 15px;
  padding-left: 15px;
  ${media.small`
    z-index: 2;
    position: absolute;
    top: 20px;
    right: 30px;
    flex-flow: column nowrap;
  `}
`;

// const Top = styled.div`
//   display: flex;
//   flex-flow: row-reverse nowrap;
//   justify-content: flex-start;
//   align-items: center;
//   ${media.small`
//     flex-flow: row nowrap;
//     justify-content: flex-end;
//   `}
// `;

// const Color = styled.button`
//   height: 18px;
//   width: 18px;
//   border-radius: 50%;
//   margin-right: 12px;
//   background-color: ${param => param.color};
//   cursor: pointer;
//   text-transform: uppercase;
//   border: none;
//   outline: none;
// `;

// const Sale = styled(Label)`
//   margin-right: auto;
//   padding: 7px 20px 6px 21px;
// ${media.small`
//     margin-left: 17px;
//     margin-right: 0;
//   `}
// `;

const PriceWrapper = styled.h2`
  padding-bottom: 15px;
  padding-top: 10px;
  margin: 0px;
  font-family: AvenirNext;
  font-size: 80px;
  font-weight: bold;
  line-height: 1;
  color: #393939;
`;

// const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 0,
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(color) {
    this.setState({ color });
  }

  render() {
    // const selectedColor = colors[this.state.color];

    return (
      <Wrapper>
        <LeftHeader>
          <Name>{this.props.title}</Name>
          {/* <Save color={selectedColor}>Save</Save>*/}
        </LeftHeader>
        <RightHeader>
          {/* <Top>*/}
          {/* {colors.map((color, index) => (*/}
          {/* <Color*/}
          {/* key={color}*/}
          {/* color={color}*/}
          {/* onClick={() => this.handleColorChange(index)}*/}
          {/* />*/}
          {/* ))}*/}
          {/* <Sale>Sale</Sale>*/}
          {/* </Top>*/}
          <PriceWrapper>
            <Price currency={this.props.currency}>{this.props.price}</Price>
          </PriceWrapper>
        </RightHeader>
      </Wrapper>
    );
  }
}

export default Header;
