import { GridCell } from 'components/core/grid';
import styled from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export const Img = styled(GridCell)<{ color: string }>`
  border-radius: 50%;
  justify-self: center;
  object-fit: cover;
  width: 300px;
  height: 300px;
  border: 20px solid ${p => p.color};

  ${media.min.m} {
    margin: 20px;
    box-shadow: 0 0 20px #00000096;
    width: 350px;
    height: 350px;
  }

  ${media.min.l} {
    width: 400px;
    height: 400px;
  }

  ${media.min.xl} {
    width: 500px;
    height: 500px;
  }
`;

export const Content = styled(GridCell)<{ flip?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  padding: ${v.size.px30};
  width: 100%;
  text-align: center;
  color: ${v.color.black};
  font-size: ${v.size.px18};

  ${media.min.m} {
    margin: 0;
    font-size: ${v.size.px22};
  }

  ${media.min.l} {
    font-size: ${v.size.px26};
  }
`;
