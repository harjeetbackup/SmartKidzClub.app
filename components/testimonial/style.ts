import { GridCell } from 'components/core/grid';
import styled from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export const ActionButton = styled.div`
  cursor: pointer;
  color: ${v.color.white};
  background-color: ${v.color.yellow};
  opacity: 0.4;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: ${v.size.px18};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus,
  &:hover {
    opacity: 1;
    box-shadow: 0 0 5px ${v.color.black};
  }
`;

export const CarouselWrapper = styled(GridCell)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${ActionButton} {
    display: none;
  }
  &:hover {
    ${ActionButton} {
      display: flex;
    }
  }
`;

export default styled.div`
  padding: 10px 0;
  min-width: 280px;

  ${media.min.xs} {
    min-width: 350px;
  }

  ${media.min.s} {
    min-width: 400px;
  }

  ${media.min.m} {
    min-width: 500px;
  }

  ${media.min.l} {
    min-width: 600px;
  }

  ${media.min.xl} {
    min-width: 500px;
  }

  ${media.min.xxl} {
    min-width: 400px;
  }

  & > div {
    border-radius: 5px;
    color: ${v.color.white};
    background: ${v.color.blue};
    padding: ${v.size.px10} ${v.size.px20};
    margin: 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 5px 1px #808080ba;
    height: 100%;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: ${v.size.px10};
      flex-wrap: wrap;
    }

    font-size: ${v.size.px14};
    line-height: 1.2;

    h4 {
      font-weight: bold;
    }

    img {
      width: 80px;

      ${media.min.l} {
        width: auto;
      }
    }
  }
`;
