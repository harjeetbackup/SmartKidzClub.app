import useGotoRoute from 'hooks/goto-route';
import Link from 'next/link';
import FreeTrial from './style';

export default function FreeTrialButton() {
  const goto = useGotoRoute();
  const hasSubscribed = goto?.startsWith('/account');
  return goto ? (
    <Link href={goto}>
      <FreeTrial href={goto}>
        {hasSubscribed ? 'My Account' : 'Start a FREE Trial'}
      </FreeTrial>
    </Link>
  ) : (
    <></>
  );
}
