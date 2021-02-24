import styled from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export default styled.button<{ primary?: boolean }>`
  padding: 0.8em 1em;
  font-size: ${v.size.px14};
  border-radius: 4px;
  transition: 0.1s;
  border: 1px solid grey;
  color: ${v.color.black};
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  width: fit-content;
  white-space: nowrap;

  @media (hover: hover) {
    opacity: 0.9;
  }

  &.primary {
    background-color: #90caf9;
    &.flip {
      color: #90caf9;
      background-color: transparent;
      &:hover {
        background-color: #90caf914;
      }
    }
  }

  &.secondary {
    background-color: #f48fb1;
    &.flip {
      color: #f48fb1;
      background-color: transparent;
      &:hover {
        background-color: #f48fb114;
      }
    }
  }

  &:active {
    transform: scale(0.95);
    transition: 0.1s;
  }

  &:hover,
  &:focus {
    opacity: 1;
    outline: auto;
    box-shadow: 0 0 5px;
  }

  &:disabled {
    opacity: 0.5 !important;
    cursor: not-allowed !important;
  }

  ${media.min.m} {
    padding: 0.5em 0.8em;
  }
`;
