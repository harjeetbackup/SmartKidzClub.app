import Grid from 'components/core/grid';
import Modal from 'components/core/modal';
import FreeTrialButton from 'components/free-trial-button';
import Link from 'next/link';
import { useState } from 'react';
import v from 'styles/variables';
import {
  Badges,
  Content,
  FreeTrialLink,
  Img,
  ImgWrapper,
  LinkWrapper,
  VideoWrapper,
} from './style';
import Video from './video';

export default function HeroVideo() {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(s => !s);
  }

  return (
    <>
      <Grid
        style={{ margin: `${v.size.px10} 0` }}
        areas={{
          xs: ['text/4', 'img/4'],
          s: ['. text/2 .', '. img/2 .'],
          m: ['. img/4 text/4 .'],
          l: ['./2 img/4 text/4 ./2'],
        }}
      >
        <VideoWrapper area='img'>
          <ImgWrapper>
            <Img
              alt='Video'
              className='shadow animate'
              onClick={toggleModal}
              src='pics/hero-image.jpg'
            />
            <Img
              alt='Play'
              className='play animate'
              onClick={toggleModal}
              src='pics/play_icon.jpg'
            />
          </ImgWrapper>

          <LinkWrapper>
            <Link href='#pricelist'>
              <FreeTrialLink href='#pricelist'>View Plans</FreeTrialLink>
            </Link>

            <FreeTrialButton />
          </LinkWrapper>
        </VideoWrapper>

        <Content area='text'>
          <h1>Educational Library at Fingertips</h1>
          <p>Reading | Activities | Quizzes | Math</p>
          <h2>Build independent and strong readers</h2>
          <Badges>
            <Img alt='EAS' src='pics/hero-common.png' />
            <Img alt='EAS' src='pics/hero-eas.png' />
            <Img alt='EAS' src='pics/hero-bma.png' />
          </Badges>
        </Content>
      </Grid>

      <Modal
        isOpen={modal}
        contentLabel='About Us'
        onRequestClose={toggleModal}
      >
        <Video />
      </Modal>
    </>
  );
}
