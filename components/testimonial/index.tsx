import Grid from 'components/core/grid';
import { memo, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// @ts-ignore
import Carousel from 'react-simply-carousel';
import v from 'styles/variables';
import reviews from './data';
import Card, { ActionButton, CarouselWrapper } from './style';

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Grid
      style={{ marginTop: v.size.px20 }}
      areas={{
        xs: ['content/4'],
        m: ['. content/8 .'],
        l: ['./2 content/8 ./2'],
      }}
    >
      <CarouselWrapper area='content'>
        <Carousel
          speed={500}
          itemsToShow={3}
          activeSlideIndex={activeSlide}
          onRequestChange={setActiveSlide}
          containerProps={{
            style: {
              maxWidth: '100%',
              position: 'relative',
              justifyContent: 'space-between',
            },
          }}
          backwardBtnProps={{
            children: <ActionButton>ᐊ</ActionButton>,
            style: {
              zIndex: 1,
              alignSelf: 'center',
              position: 'absolute',
              left: 0,
              textAlign: 'end',
            },
          }}
          forwardBtnProps={{
            children: <ActionButton>ᐅ</ActionButton>,
            style: {
              right: 0,
              zIndex: 1,
              position: 'absolute',
              alignSelf: 'center',
            },
          }}
          responsiveProps={[
            { maxWidth: 1366, itemsToShow: 2 },
            { maxWidth: 1024, itemsToShow: 1 },
          ]}
        >
          {reviews.map(item => (
            <Card key={item.reviewer}>
              <div>
                <div>
                  <h4>{item.reviewer}</h4>
                  <img src='pics/review_rating.png' alt='Review Rating' />
                </div>
                <p>{item.review}</p>
              </div>
            </Card>
          ))}
        </Carousel>
      </CarouselWrapper>
    </Grid>
  );
};

export default memo(Testimonial);
