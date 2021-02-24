import styled from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Step = styled.div`
  width: 30px;
  height: 30px;
  font-size: ${v.size.px14};
  border-radius: 50%;
  margin: ${v.size.px10};
  border: 2px solid ${v.color.brandRed};
  vertical-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  /* &:hover {
    box-shadow: 0 0 10px ${v.color.brandRed};
  } */
  color: ${v.color.white};
  background-color: ${v.color.brandRed};

  ${media.min.s} {
    width: 45px;
    height: 45px;
    font-size: ${v.size.px14};
  }

  ${media.min.m} {
    width: 60px;
    height: 60px;
    font-size: ${v.size.px18};
  }
`;
