import { IFrame, VideoContainer } from './style';

const params = [
  'loop=1',
  'autoplay=1',
  'enablejsapi=0',
  'modestbranding=0',
  'showinfo=0',
  'width=100%',
  'rel=0',
  'autoplay=1',
].join('&amp;');

export default function Video() {
  return (
    <VideoContainer>
      <IFrame
        width='100%'
        frameBorder='0'
        allowFullScreen
        src={`https://www.youtube.com/embed/XKEsrHHyLbk?${params}`}
      />
    </VideoContainer>
  );
}
