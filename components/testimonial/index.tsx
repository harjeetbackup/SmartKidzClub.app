import Carousel, { Slide } from 'components/core/carousel';
import Grid, { GridCell } from 'components/core/grid';
import { memo } from 'react';
import { size } from 'styles/media-query';
import v from 'styles/variables';
import reviews from './data';
import Card, { Rating } from './style';

const glideOptions = {
  type: 'carousel',
  gap: 0,
  autoplay: 5000,
  perView: 2,
  animationDuration: 700,
  breakpoints: {
    [size.m]: {
      perView: 1,
    },
  },
};

const Testimonial = () => {
  return (
    <Grid
      style={{ marginTop: v.size.px20 }}
      areas={{
        xs: ['content/4'],
        m: ['. content/8 .'],
        l: ['./2 content/8 ./2'],
      }}
    >
      <GridCell area='content'>
        <Carousel controls options={glideOptions as any}>
          {reviews.map(item => (
            <Slide key={item.reviewer}>
              <Card>
                <div>
                  <h4>{item.reviewer}</h4>
                  <Rating>&#9733; &#9733; &#9733; &#9733; &#9733;</Rating>
                </div>
                <p>{item.review}</p>
              </Card>
            </Slide>
          ))}
        </Carousel>
      </GridCell>
    </Grid>
  );
};

export default memo(Testimonial);