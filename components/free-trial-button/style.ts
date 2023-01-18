import styled, { css } from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export default styled.a<{ flipColor?: boolean }>`
  align-self: center;
  padding: 10px;
  font-size: ${v.size.px14};
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
  border-radius: 10px;
  box-shadow: 0 0 5px grey;
  white-space: nowrap;
  transition: 0.1s;
  position: relative;
  text-align: center;
  height: 33px;
  width: 160px;

  &:disabled {
    box-shadow: none;
    background: grey;
		white-space: nowrap;
  }

  &:focus,
  &:hover:not(:disabled) {
    transition: 0.1s;
    box-shadow: 0 0 8px ${v.color.red};
		white-space: nowrap;
  }

  &:active {
    transform: scale(0.95);
    transition: 0.1s;
		white-space: nowrap;
  }

  ${media.min.l} {
    font-size: ${v.size.px16};
    height: 45px;
    width: 200px;
		white-space: nowrap;
  }
`;
