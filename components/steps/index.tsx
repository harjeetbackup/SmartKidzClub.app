import Wrapper, { Step } from './style';

export default function Steps(p: { count: number }) {
  return (
    <Wrapper>
      <Step>{p.count}</Step>
    </Wrapper>
  );
}
