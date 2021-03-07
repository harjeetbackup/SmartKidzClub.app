import { GridCell } from 'components/core/grid';
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
  ${media.min.s} {
    flex-direction: row;
  }
`;

export const StyledPrice = styled.div<{ selectable?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 5px solid ${v.color.yellow};
  color: ${v.color.black};
  background-color: ${v.color.white};
  box-shadow: 0 0 10px white;
  padding: ${v.size.px10};
  border-radius: 10px;
  grid-gap: 10px;
  width: 90%;
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
        box-shadow: 0 0 5px ${v.color.red};
      }

      &.active {
        border-color: ${v.color.red};
        box-shadow: 0 0 10px ${v.color.red};

        span.best {
          border-color: ${v.color.red};
          background-color: ${v.color.red};
        }
      }
    `}

  ${media.min.s} {
    width: 60%;
  }

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
  top: -12px;
  padding: 0 5px;
  z-index: 1;
  color: ${v.color.white};
  border: 2px solid ${v.color.yellow};
  border-radius: 5px;
  background-color: ${v.color.yellow};
  font-size: ${v.size.px14};
  font-weight: bold;
  white-space: pre;

  ${media.min.m} {
    font-size: ${v.size.px12};
  }
`;

export const PromoWrapper = styled.div`
  text-align: center;
  margin: ${v.size.px10};
  margin-bottom: ${v.size.px20};
  background: white;
  color: black;
  padding: ${v.size.px10} ${v.size.px20};
  border-radius: 10px;
  max-width: 90%;
  align-self: center;
  b {
    color: ${v.color.blue};
  }
  ${media.min.l} {
    max-width: 80%;
  }
`;

export default styled(GridCell)`
  color: ${v.color.white};
  background: ${v.color.blue};
  padding: ${v.size.px22};
  border-radius: 15px;
  box-shadow: 0 6px 50px #264e7624;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem 1rem;
`;
