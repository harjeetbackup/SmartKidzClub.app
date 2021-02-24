import styled from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export default styled.div`
  border-radius: 5px;
  color: ${v.color.white};
  background: ${v.color.brandBlue};
  margin: 0 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: ${v.size.px10} ${v.size.px20};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px 1px #808080ba;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  & > * {
    &:not(p) {
      margin-bottom: 10px;
    }
  }

  h4 {
    font-size: ${v.size.px14};
  }

  h5 {
    font-size: ${v.size.px12};
    font-style: italic;
  }

  ${media.min.m} {
    h4 {
      font-size: ${v.size.px16};
    }

    p {
      font-size: ${v.size.px14};
    }
  }
`;
