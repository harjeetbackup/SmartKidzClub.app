import styled from 'styled-components';
import media from 'styles/media-query';

export default styled.a`
  outline: none;
  background-color: white;
  border-radius: 10px;
  border: 2px solid white;
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
  height: 33px;
  width: 33px;
  &.android {
    background-image: url(html/assets/images/android.png);
  }
  &.ios {
    background-image: url(html/assets/images/ios.png);
  }
  &.amazon {
    background-image: url(html/assets/images/amazon_small.png);
  }  
  ${media.min.l} {
    height: 45px;
    width: 45px;
  }
`;
