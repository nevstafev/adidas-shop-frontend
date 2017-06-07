import React from 'react';
import styled from 'styled-components';

import media from '../../utils/media';
// import Label from '../../components/Label';

const Image = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 10px;
  margin-bottom: 30px;
  flex-flow: column nowrap;
  background-color: #f4f4f4;
  ${media.small`
    margin: 4px 4px 20px 4px;
  `}
`;

// const Sale = styled(Label)`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   padding: 10px 25px;
//   ${media.small`
//     top: 20px;
//     right: 20px;
//     padding: 5px 20px;
//   `}
// `;

export default props => (
  <Wrapper>
    <Image src={props.image} />
    {props.children}
    {/* {props.isSale && <Sale>Sale</Sale>}*/}
  </Wrapper>
);
