import { css } from 'styled-components';

const sizes = {
  small: 786,
  medium: 1024,
  large: 1440,
};

export default Object.keys(sizes).reduce((accumulator, label) => {
  const pxSize = sizes[label];
  // eslint-disable-next-line no-param-reassign
  accumulator[label] = (...args) => css`
      @media screen and (min-width: ${pxSize}px) {
        ${css(...args)}
      }
    `;
  return accumulator;
}, {});
