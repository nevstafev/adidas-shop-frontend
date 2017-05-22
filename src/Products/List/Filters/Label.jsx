import styled from 'styled-components';

import media from './../../../utils/media';

export default styled.span`
  padding-right: 20px;
  font-family: AvenirNext;
  font-size: 24px;
  line-height: 1.375;
  text-transform: uppercase;
  color: #4d42f8;
  ${media.small`
    padding-left: 35px;
    padding-right: 20px;
  `}
`;
