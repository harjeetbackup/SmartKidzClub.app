import { GridCell } from 'components/core/grid';
import styled from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export const Welcome = styled(GridCell)`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin: 0 ${v.size.px20};
  margin-top: ${v.size.px10};
  align-items: center;
  justify-content: space-between;
  h1 {
    font-weight: bolder;
    font-size: ${v.size.px20};
  }

  ${media.min.m} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Paying = styled(GridCell)`
  text-align: center;
  padding: ${v.size.px10};
`;

export const SplitSection = styled(GridCell)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 ${v.size.px20};
  margin-top: ${v.size.px10};
  padding: ${v.size.px10};
  box-shadow: 0 0 5px grey;
  border-radius: 5px;
  gap: 10px;

  div {
    text-align: center;
    gap: 5px;
    display: flex;
    flex-direction: column;
  }

  ${media.min.m} {
    flex-direction: row;
    justify-content: space-between;
    padding: ${v.size.px20};
    div {
      gap: 10px;
      align-items: flex-end;
      flex-direction: column;
    }
  }
`;

export const DownloadApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    border: 2px solid ${v.color.brandYellow};
    border-radius: 5px;
    margin: ${v.size.px10} ${v.size.px20};
    padding: ${v.size.px10};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    p {
      font-size: ${v.size.px16};
      text-align: center;
    }
    div {
      display: flex;
      gap: 30px;
      a {
        outline: none;
        background-color: white;
        border-radius: 10px;
        border: 0;
        color: #000;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        line-height: 14px;
        background-repeat: round;
        text-decoration: none;
        text-transform: uppercase;
        transition: all 300ms ease;
        height: 30px;
        width: 100px;
        &.android {
          background-image: url(pics/google_play.png);
        }
        &.ios {
          background-image: url(pics/app_store.png);
        }
      }
    }

    ${media.min.l} {
      padding: ${v.size.px20};
      div a {
        height: 40px;
        width: 140px;
      }
    }
  }
`;
