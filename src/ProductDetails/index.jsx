import React from "react";
import Header from "./Header";
import ProductViewer from "./Viewer";
import Description from "./Description";
import styled from "styled-components";

const Wrapper = styled.main`
  display: block;
`;

const ProductWrapepr = styled.div`
  font-family: "AvenirNext";
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex: 1 100%; 
`;

const BuyWrapper = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 414px;
  right: 0px;
`;

const Button = styled.button`
  font-family: "AvenirNext";
  width: 100%;
  font-size: 32px;
  font-weight: normal;
  text-transform: uppercase;
  color: #ffffff;
  padding-top: 34px;
  padding-bottom: 37px;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  outline: none;
`;

export default () => {
  {
    return (
      <Wrapper>
        <ProductWrapepr>
          <Header />
          <ProductViewer />
          <Description />
        </ProductWrapepr>
        <BuyWrapper>
          <Button>
            Buy now
          </Button>
        </BuyWrapper>
      </Wrapper>
    );
  }
};
