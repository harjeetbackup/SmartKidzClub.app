import Grid, { GridCell } from 'components/core/grid';
import styled from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export const DownloadApp = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  padding: ${v.size.px10};
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

    ${media.min.l} {
      height: 40px;
      width: 140px;
    }
  }
`;

export const Content = styled(GridCell)`
  padding: ${v.size.px20};
  background: ${v.color.blue};
  color: ${v.color.white};
  border-radius: 10px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    padding-bottom: ${v.size.px2};
  }

  a {
    color: white;
    text-decoration: underline;
  }
`;

export default styled(Grid)`
  text-align: center;
  padding: 0 ${v.size.px20};
  gap: 20px;

  h1 {
    font-size: ${v.size.px28};
    color: ${v.color.red};
    padding: ${v.size.px10};
  }
`;
