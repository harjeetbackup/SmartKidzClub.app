import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import media from './media-query';
import reset from './reset';
import v from './variables';

export default createGlobalStyle`
 :root {
    --nprogress-color: ${v.color.red};
  }

  *:not(i) {
    box-sizing: border-box;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    font-family: 'RobotoLight', sans-serif;
  }

  #nprogress {
    .bar {
      background-color: ${v.color.red};
      height: 3px;
      top: 60px;

      ${media.min.s}{
        top: 70px;
      }
    }
    .peg {
      transform: none;
      width: 20px;
    }
    .spinner-icon {
      display: none;
    }
  }
  
  .toastContainer{
    z-index: ${v.zIndex.toast};
  }

  ${reset}

  ${fonts}
`;
