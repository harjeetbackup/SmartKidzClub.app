import Grid from 'components/core/grid';
import { IChildren } from 'models';
import { memo } from 'react';
import { Content, Img } from './style';

export type Props = {
  img: string;
  alt: string;
  color: string;
  flip?: boolean;
} & IChildren;

function AppFeature(p: Props) {
  return (
    <Grid
      gap=''
      areas={{
        xs: ['img/2', 'text/2'],
        m: p.flip ? ['. text/4 img/4 .'] : ['. img/4 text/4 .'],
        l: p.flip ? ['./2 text/4 img/4 ./2'] : ['./2 img/4 text/4 ./2'],
      }}
    >
      <Img area='img' as='img' src={p.img} color={p.color} alt={p.alt} />
      <Content area='text' flip={p.flip}>
        {p.children}
      </Content>
    </Grid>
  );
}

export default memo(AppFeature);
