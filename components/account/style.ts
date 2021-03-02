import Grid, { GridCell } from 'components/core/grid';
import styled from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export default styled(Grid)`
  margin-top: ${v.size.px10};
  font-size: ${v.size.px14};
  gap: ${v.size.px20};
  ${media.min.m} {
    margin-top: ${v.size.px20};
  }
`;

export const Welcome = styled(GridCell)`
  display: flex;
  gap: 10px;
  flex-direction: column;
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
  padding: ${v.size.px20} 0;
`;

export const SplitSection = styled(GridCell)`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 5px grey;
  border-radius: 5px;
  gap: 10px;
  padding: ${v.size.px10};
  margin: 0 ${v.size.px20};
  background: ${v.color.blue};
  color: ${v.color.white};

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
    margin: 0;
    div {
      gap: 10px;
      align-items: flex-end;
      flex-direction: column;
    }
  }
`;
