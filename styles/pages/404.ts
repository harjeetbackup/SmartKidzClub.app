import styled from 'styled-components';
import v from '../variables';

export default styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${v.size.px20};
  h1 {
    font-weight: bold;
    margin: ${v.size.px30};
    font-size: ${v.size.px30};
  }
  a {
    color: revert;
    text-decoration: revert;
  }
`;
