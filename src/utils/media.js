import { css } from 'styled-components';

const sizes = {
  small: 768,
  medium: 992,
  large: 1200,
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
