import { GridCell } from 'components/core/grid';
import styled from 'styled-components';
import media, { size } from 'styles/media-query';
import v from 'styles/variables';

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  padding: 10px;
  overflow: hidden;
  min-width: 320px;
  min-height: 180px;

  ${media.min.s} {
    min-width: ${size.s}px;
    min-height: 324px;
  }

  ${media.min.m} {
    min-width: ${size.m}px;
    min-height: 432px;
  }

  ${media.min.l} {
    min-width: ${size.l}px;
    min-height: 558px;
  }

  ${media.min.xl} {
    min-width: ${size.xl}px;
    min-height: 675px;
  }
`;

export const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

export const VideoWrapper = styled(GridCell)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  place-content: center;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10px;

  span.play {
    position: absolute;
    margin: 10px 20px;
    cursor: pointer;
    pointer-events: none;

    bottom: 0;
    right: 0;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: ${v.size.px10};
`;

export const Img = styled.img`
  transform: scale(0.98);
  height: auto;
  width: 100%;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  max-width: 100%;
  border-radius: 4px;
  align-self: center;

  &.shadow {
    box-shadow: 0 0 10px #555;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(0.99);
  }
`;

export const FreeTrialLink = styled.a`
  align-self: center;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px grey;
  transition: 0.1s;
  position: relative;

  &:disabled {
    box-shadow: none;
    background: grey;
  }

  background: ${v.color.white};
  color: ${v.color.brandRed};

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

export const Badges = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 80px;
    padding: 0 5px;
    cursor: default;

    ${media.min.l} {
      width: 100px;
      padding: 0 10px;
      transform: scale(1);
    }
  }
`;

export const Content = styled(GridCell)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  justify-content: center;

  & > * {
    margin-bottom: 20px;
    &:last-child {
      margin: 0;
    }
  }
  h1 {
    font-size: ${v.size.px24};
    font-weight: normal;
  }
  p {
    font-size: ${v.size.px18};
    font-weight: normal;
  }
  h2 {
    font-size: ${v.size.px20};
    font-weight: normal;
  }

  ${media.min.s} {
    width: 100%;
  }

  ${media.min.l} {
    h1 {
      font-size: ${v.size.px26};
    }
    p {
      font-size: ${v.size.px18};
    }
    h2 {
      font-size: ${v.size.px22};
    }
  }

  ${media.min.xl} {
    h1 {
      font-size: ${v.size.px32};
    }
  }
`;