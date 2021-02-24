import routeVia from 'utils/route-via';
import useUserWithSubscription from './user-with-subscription';

export default function useGotoRoute() {
  const {
    user,
    subscription,
    loadingUser,
    loadingSubscription,
  } = useUserWithSubscription();

  if (loadingUser) {
    return null;
  }

  if (user) {
    if (loadingSubscription) {
      return null;
    } else {
      if (subscription) {
        return routeVia('/account');
      } else {
        return routeVia('/subscribe');
      }
    }
  }

  return routeVia('/login');
}
