import Grid, { GridCell } from 'components/core/grid';
import styled, { css } from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export const Heading = styled.h3`
  font-size: ${v.size.px20};
  color: ${v.color.white};
`;

export const Subtitle = styled.p`
  font-size: ${v.size.px20};
`;

export const StyledHint = styled.div`
  margin-top: ${v.size.px10};
  font-family: ${v.font.regular};
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
  border: 5px solid ${v.color.brandYellow};
  color: ${v.color.black};
  background-color: ${v.color.white};
  box-shadow: 0 0 10px white;
  padding: ${v.size.px10};
  border-radius: 10px;
  grid-gap: 10px;
  width: 60%;
  position: relative;

  ${p =>
    p.selectable &&
    css`
      cursor: pointer;
      transition: all 0.1s ease-in;
      box-shadow: 0 0 5px grey;
      &:hover {
        transition: all 0.1s ease-in;
        transform: scale(1.048);
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
    font-size: ${v.size.px18};
  }

  ${media.min.l} {
    font-size: ${v.size.px16};
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

export const Subscribed = styled(Grid)`
  text-align: center;
  margin-top: ${v.size.px20};
  padding: 0 ${v.size.px20};
  gap: 20px;

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
  color: ${v.color.white};
  background: ${v.color.brandBlue};
  padding: ${v.size.px22};
  border-radius: 15px;
  box-shadow: 0 6px 50px #264e7624;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
`;
