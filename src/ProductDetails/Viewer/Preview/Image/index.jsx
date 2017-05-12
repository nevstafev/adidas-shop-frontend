import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-right: 5px;
  margin-left: 34px;
  cursor: pointer;
  flex: 1;
  &:hover {
    outline: 4px solid #d8d8d8;
  }
  outline: ${params => (params.selected ? "4px solid #d8d8d8" : "none")};
`;

//todo: correct params

const Image = styled.img`
  width: 100%;
`;

export default () => {
  return (
    <Wrapper>
      <Image src={require("./dark-front.png")} />
    </Wrapper>
  );
};
