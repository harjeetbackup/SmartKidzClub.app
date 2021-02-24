import useGotoRoute from 'hooks/goto-route';
import Link from 'next/link';
import FreeTrial from './style';

export default function FreeTrialButton(p: { flipColor?: boolean }) {
  const goto = useGotoRoute();
  const hasSubscribed = goto?.startsWith('/account');
  return goto ? (
    <Link href={goto}>
      <FreeTrial href={goto} {...p}>
        {hasSubscribed ? 'My Account' : 'Start a FREE Trial'}
      </FreeTrial>
    </Link>
  ) : (
    <></>
  );
}
