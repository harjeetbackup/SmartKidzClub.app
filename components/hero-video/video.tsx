import { IFrame, VideoContainer } from './style';

export default function Video() {
  return (
    <VideoContainer>
      <IFrame
        allowFullScreen
        src='https://www.youtube.com/embed/XKEsrHHyLbk?autoplay=0&amp;enablejsapi=0&amp;modestbranding=0&amp;showinfo=0&amp;width=100%&amp;rel=0'
        frameBorder='0'
        width='100%'
      />
    </VideoContainer>
  );
}
