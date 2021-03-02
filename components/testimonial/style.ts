import styled from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export default styled.div`
  border-radius: 5px;
  color: ${v.color.white};
  background: ${v.color.blue};
  margin: 0 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: ${v.size.px10} ${v.size.px20};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px 1px #808080ba;
  height: 100%;
  min-height: 200px;

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

  ${media.min.l} {
    min-height: 230px;
  }
`;
