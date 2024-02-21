import AppFeature, { Props as AppFeatureProps } from 'components/app-feature';
import ColorBar from 'components/color-bar';
import HeroVideo from 'components/hero-video';
import PriceList from 'components/product';
import Testimonial from 'components/testimonial';
import { NextPageContext } from 'next';
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import Head from 'next/head';
import v from 'styles/variables';

const features: AppFeatureProps[] = [
  {
    children: <p>Simplify reading for you and your child</p>,
    color: v.color.yellow,
    alt: 'img',
    img: 'pics/feature-1.jpg',
  },
  {
    flip: true,
    children: (
      <p>Keep kids focused on reading with audio &amp; word highlighting</p>
    ),
    color: v.color.blue,
    alt: 'img',
    img: 'pics/feature-2.jpg',
  },
  {
    children: <p>Motivate kids with rewards and badges</p>,
    color: v.color.yellow,
    alt: 'img',
    img: 'pics/feature-3.jpg',
  },
  {
    flip: true,
    children: <p>Keep kids safe with offline access</p>,
    color: v.color.blue,
    alt: 'img',
    img: 'pics/feature-4.jpg',
  },
  {
    children: <p>Trusted by parents worldwide</p>,
    color: v.color.yellow,
    alt: 'img',
    img: 'pics/feature-5.jpg',
  },
];

function Page(p: { landing: boolean }) {
  return (
    <>
      <Head>
        <title>SmartKidzClub Premium App</title>
      </Head>
      <HeroVideo {...p} />
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

export const getServerSideProps = withAuthUserTokenSSR()(
  async (ctx: NextPageContext) => ({
    props: {
      landing: [1, '1'].includes(ctx.query.landing as string),
    },
  })
);

export default withAuthUser()(Page);
