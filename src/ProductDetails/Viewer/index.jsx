import React from "react";
import Preview from "./Preview";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex: 0 0 100%;
`;

const ImageWrapper = styled.div`
  text-align: center;
  flex: 2 0 100%;
`;

const Image = styled.img`
  width: 100%;
`;

export default () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={require("./dark-big.png")} />
      </ImageWrapper>
      <Preview />
    </Wrapper>
  );
};
