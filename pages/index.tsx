import AppFeature, { Props as AppFeatureProps } from 'components/app-feature';
import ColorBar from 'components/color-bar';
import HeroVideo from 'components/hero-video';
import PriceList from 'components/product';
import Testimonial from 'components/testimonial';
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import v from 'styles/variables';

const features: AppFeatureProps[] = [
  {
    children: <p>Simplify reading for you and your child</p>,
    color: v.color.brandYellow,
    alt: 'img',
    img: 'pics/feature-1.jpg',
  },
  {
    flip: true,
    children: (
      <p>Keep kids focused on reading with audio &amp; word highlighting</p>
    ),
    color: v.color.brandBlue,
    alt: 'img',
    img: 'pics/feature-2.jpg',
  },
  {
    children: <p>Motivate kids with rewards and badges</p>,
    color: v.color.brandYellow,
    alt: 'img',
    img: 'pics/feature-3.jpg',
  },
  {
    flip: true,
    children: <p>Keep kids safe with offline access</p>,
    color: v.color.brandBlue,
    alt: 'img',
    img: 'pics/feature-4.jpg',
  },
  {
    children: <p>Trusted by parents worldwide</p>,
    color: v.color.brandYellow,
    alt: 'img',
    img: 'pics/feature-5.jpg',
  },
];

function Page() {
  return (
    <>
      <HeroVideo />
      <Testimonial />
      <div style={{ margin: `${v.size.px50} 0` }}>
        {features.map((m, i) => (
          <AppFeature key={i} {...m} />
        ))}
      </div>
      <PriceList />
      <ColorBar />
    </>
  );
}

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Page);
