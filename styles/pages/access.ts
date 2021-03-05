import Grid, { GridCell } from 'components/core/grid';
import styled from 'styled-components';
import v from 'styles/variables';

export const Heading = styled(GridCell)`
  font-size: ${v.size.px24};
  color: ${v.color.red};
  padding: ${v.size.px10};
  text-align: center;
`;

export const Agreement = styled.div`
  font-family: ${v.font.regular};
  font-size: ${v.size.px12};
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;

  & > :first-child {
    width: fit-content;
  }

  a {
    color: revert;
    text-decoration: revert;
  }
`;

export default styled(Grid)`
  padding: 0 ${v.size.px20};
  gap: 20px;
`;
