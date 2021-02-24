import styled, { css } from 'styled-components';
import media, { TDeviceSize } from 'styles/media-query';
import v from 'styles/variables';

export const GridCell = styled.div<{ area: string }>`
  grid-area: ${p => p.area};
`;

export default styled.div<{
  gap?: string;
  areas: Record<keyof TDeviceSize | 'xs', string>;
  columns: Record<keyof TDeviceSize | 'xs', number>;
}>`
  display: grid;
  grid-gap: ${p => p.gap ?? v.size.px10};
  // padding-right: 1rem;
  // padding-left: 1rem;

  ${p =>
    p.areas.xs &&
    css`
      grid-template-areas: ${p.areas.xs};
      grid-template-columns: repeat(${p.columns.xs}, 1fr);
    `};

  ${p =>
    p.areas.s &&
    css`
      ${media.min.s} {
        grid-template-areas: ${p.areas.s};
        grid-template-columns: repeat(${p.columns.s}, 1fr);
      }
    `};

  ${p =>
    p.areas.m &&
    css`
      ${media.min.m} {
        grid-template-areas: ${p.areas.m};
        grid-template-columns: repeat(${p.columns.m}, 1fr);
      }
    `};

  ${p =>
    p.areas.l &&
    css`
      ${media.min.l} {
        grid-template-areas: ${p.areas.l};
        grid-template-columns: repeat(${p.columns.l}, 1fr);
      }
    `};

  ${p =>
    p.areas.xl &&
    css`
      ${media.min.xl} {
        grid-template-areas: ${p.areas.xl};
        grid-template-columns: repeat(${p.columns.xl}, 1fr);
      }
    `};
`;
