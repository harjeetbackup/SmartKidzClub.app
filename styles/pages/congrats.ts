import Grid, { GridCell } from 'components/core/grid';
import styled from 'styled-components';
import v from 'styles/variables';

export const DownloadApp = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  padding: ${v.size.px10};
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
    font-size: ${v.size.px24};
    color: ${v.color.red};
    padding: ${v.size.px10};
  }
`;
