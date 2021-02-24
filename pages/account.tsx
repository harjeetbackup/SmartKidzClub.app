import Account from 'components/account';
import useUserWithSubscription from 'hooks/user-with-subscription';
import { IAuth } from 'models';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';

function Page() {
  const auth = useAuthUser() as IAuth;
  const { user, subscription } = useUserWithSubscription();

  return (
    <>{user && subscription && <Account {...subscription} auth={auth} />}</>
  );
}

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Page);
