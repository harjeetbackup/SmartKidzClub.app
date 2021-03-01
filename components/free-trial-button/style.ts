import styled, { css } from 'styled-components';
import v from 'styles/variables';

export default styled.a<{ flipColor?: boolean }>`
  align-self: center;
  padding: 10px;
  font-size: ${v.size.px16};
  ${p =>
    p.flipColor
      ? css`
          color: ${v.color.brandRed};
          background: ${v.color.white};
        `
      : css`
          color: ${v.color.white};
          background: ${v.color.brandRed};
        `}
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px grey;
  transition: 0.1s;
  position: relative;

  &:disabled {
    box-shadow: none;
    background: grey;
  }

  &:focus,
  &:hover:not(:disabled) {
    transition: 0.1s;
    box-shadow: 0 0 8px ${v.color.brandRed};
  }

  &:active {
    transform: scale(0.95);
    transition: 0.1s;
  }
`;
