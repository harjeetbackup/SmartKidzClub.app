import Grid from 'components/core/grid';
import Modal from 'components/core/modal';
import { Android, IOS } from 'components/download-link';
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
  LinkContainer,
  LinkWrapper,
  VideoWrapper,
} from './style';
import Video from './video';

export default function HeroVideo(props: { landing?: boolean }) {
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
        </VideoWrapper>

        <Content area='text'>
          <h1>Inspire kids to read and learn</h1>
          <h2>Top Rated Book App for Kids</h2>
          {/* <h1>Educational Library at Fingertips</h1>
              <p>Reading | Activities | Quizzes | Math</p>
              <h2>Build independent and strong readers</h2> --> */}
          <Badges alt='Badges' src='pics/hero_logos.png' />
        </Content>
      </Grid>

      <LinkWrapper>
        <>
          <LinkContainer>
            {props.landing ? (
              <></>
            ) : (
              <Link href='#pricelist'>
                <FreeTrialLink href='#pricelist'>View Plans</FreeTrialLink>
              </Link>
            )}

            <FreeTrialButton />
          </LinkContainer>

          <LinkContainer>
            <IOS />
            <Android />
          </LinkContainer>
        </>
      </LinkWrapper>

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
