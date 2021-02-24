import styled from 'styled-components';
import v from 'styles/variables';

export const CommonWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    max-width: ${v.limit.wrapperMaxWidth};
  }
`;
