import { GridCell } from 'components/core/grid';
import styled, { css } from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export const Heading = styled.h3`
  font-weight: bold;
  font-size: ${v.size.px24};
  color: ${v.color.brandRed};
`;

export const Subtitle = styled.p`
  font-size: ${v.size.px20};
`;

export const StyledHint = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${v.size.px14};
  font-style: italic;
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const AllPrices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  margin-top: ${v.size.px30};
  margin-bottom: ${v.size.px20};
  width: 100%;
  ${media.min.l} {
    flex-direction: row;
  }
`;

export const StyledPrice = styled.div<{ selectable?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 2px solid ${v.color.brandYellow};
  padding: ${v.size.px10};
  border-radius: 5px;
  grid-gap: 10px;
  width: 60%;
  position: relative;

  ${p =>
    p.selectable &&
    css`
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 0 5px grey;
      &:hover {
        transition: all 0.2s ease;
        transform: scale(1.05);
        box-shadow: 0 0 5px ${v.color.brandRed};
      }

      &.active {
        border-color: ${v.color.brandRed};
        box-shadow: 0 0 10px ${v.color.brandRed};

        span.best {
          border-color: ${v.color.brandRed};
          background-color: ${v.color.brandRed};
        }
      }
    `}

  ${media.min.m} {
    font-size: ${v.size.px22};
  }

  ${media.min.l} {
    font-size: ${v.size.px18};
    width: 30%;
  }

  ${media.min.xl} {
    width: 25%;
  }
`;

export const BestValue = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -10px;
  padding: 0 5px;
  z-index: 1;
  color: ${v.color.white};
  border: 2px solid ${v.color.brandYellow};
  border-radius: 5px;
  background-color: ${v.color.brandYellow};
  font-size: ${v.size.px12};
  white-space: pre;

  ${media.min.m} {
    font-size: ${v.size.px10};
  }
`;

export const Subscribed = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: ${v.size.px40};
  padding: 0 ${v.size.px20};

  h1 {
    font-size: ${v.size.px32};
    color: ${v.color.brandRed};
  }

  h2 {
    font-size: ${v.size.px26};
  }

  a {
    color: blue;
    text-decoration: underline;
  }

  ${media.min.l} {
    gap: 50px;
  }
`;

export const PromoWrapper = styled.div`
  text-align: center;
  margin: ${v.size.px10};
  padding: 0 ${v.size.px20};
  b {
    color: ${v.color.brandBlue};
  }
`;

export default styled(GridCell)`
  padding: ${v.size.px22};
  border-radius: 15px;
  box-shadow: 0 6px 50px #264e7624;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 20px;
    &:first-child {
      margin: 0;
    }
  }
`;
