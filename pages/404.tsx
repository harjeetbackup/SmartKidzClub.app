import Link from 'next/link';
import Wrapper from 'styles/pages/404';

export default function Page() {
  return (
    <Wrapper>
      <h1>404</h1>
      <p>
        The page you are looking for might be moved or unavailable at this
        moment.
      </p>
      <Link href='/' as='/'>
        <a>Go back to Home</a>
      </Link>
    </Wrapper>
  );
}
