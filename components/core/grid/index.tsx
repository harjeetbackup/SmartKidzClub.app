import { HTMLAttributes } from 'react';
import { TSize } from 'styles/media-query';
import Wrapper from './style';

export { GridCell } from './style';

function splitArea(str: string) {
  return (
    str
      .trim()
      .split(' ')
      .filter(Boolean)
      .reduce((a, c) => {
        const [area, count] = c.trim().split('/');
        a += (area + ' ').repeat(Number(count || 1));
        return a;
      }, '"')
      .trim() + '"'
  );
}

function splitAreas(str: string[] = []): [string, number] {
  const areas = str.map(splitArea);
  return [areas.join('\n'), areas[0]?.split(' ').length || 0];
}

export default function Grid({
  areas,
  ...p
}: {
  gap?: string;
  as?: any;
  areas: { [k in TSize | 'xs']?: string[] };
} & HTMLAttributes<HTMLDivElement>) {
  const [xs, len_xs] = splitAreas(areas.xs);
  const [s, len_s] = splitAreas(areas.s);
  const [m, len_m] = splitAreas(areas.m);
  const [l, len_l] = splitAreas(areas.l);
  const [xl, len_xl] = splitAreas(areas.xl);

  return (
    <Wrapper
      {...p}
      areas={{ xs, s, m, l, xl }}
      columns={{
        xs: len_xs,
        s: len_s,
        m: len_m,
        l: len_l,
        xl: len_xl,
      }}
    >
      {p.children}
    </Wrapper>
  );
}
