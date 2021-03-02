import styled from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export default styled.button<{ primary?: boolean }>`
  padding: 0.8em 1em;
  font-size: ${v.size.px14};
  border-radius: 10px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  width: fit-content;
  white-space: nowrap;
  color: ${v.color.white};
  cursor: pointer;
  height: 40px;
  outline-color: ${v.color.white};
  background-color: ${v.color.red};
  position: relative;

  &:disabled {
    opacity: 0.5 !important;
    cursor: not-allowed !important;
  }

  ${media.min.m} {
    padding: 0.5em 0.8em;
  }
`;
