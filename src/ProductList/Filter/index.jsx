import React from "react";
import styled from "styled-components";
import Gender from "./Gender";
import Size from "./Size";

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
  flex: 1 0 100%;
  padding: 11px 0px;
  border-bottom: 3px solid #e7e7e7;
`;

const Icon = styled.div`
  width: 55px;
  height: 55px;
  margin-left: 24px;
  background: url(${require("./filter.png")}) no-repeat center #ebebeb;
`;

export default () => {
  return (
    <Nav>
      <Icon />
      <Gender />
      <Size />
    </Nav>
  );
};
