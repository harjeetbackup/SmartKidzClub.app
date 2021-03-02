import styled, { css } from 'styled-components';
import v from 'styles/variables';

export default styled.a<{ flipColor?: boolean }>`
  align-self: center;
  padding: 10px;
  font-size: ${v.size.px16};
  ${p =>
    p.flipColor
      ? css`
          color: ${v.color.red};
          background: ${v.color.white};
          font-family: ${v.font.regular};
        `
      : css`
          color: ${v.color.white};
          background: ${v.color.red};
        `}
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px grey;
  transition: 0.1s;
  position: relative;
  text-align: center;

  &:disabled {
    box-shadow: none;
    background: grey;
  }

  &:focus,
  &:hover:not(:disabled) {
    transition: 0.1s;
    box-shadow: 0 0 8px ${v.color.red};
  }

  &:active {
    transform: scale(0.95);
    transition: 0.1s;
  }
`;
