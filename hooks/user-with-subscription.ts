import { auth, db } from 'lib/firebase/client';
import { ISubscription } from 'models';
import { useEffect, useState } from 'react';
import { SubscriptionWithPrices } from 'utils/subscription';
import useIsMounted from './mount';

type State = {
  loadingUser: boolean;
  loadingSubscription?: boolean;
  subscription?: ISubscription;
  user?: {
    uid: string;
    displayName?: string | null;
    email?: string | null;
  } | null;
};

export default function useUserWithSubscription() {
  const isMounted = useIsMounted();

  const [data, setData] = useState<State>({
    loadingUser: true,
    loadingSubscription: true,
  });

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      isMounted &&
        setData({
          user,
          loadingUser: false,
        });
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (data.user) {
      if (data.loadingUser && !data.loadingSubscription) {
        isMounted && setData(s => ({ ...s, loadingSubscription: true }));
      } else {
        db.collection('customers')
          .doc(data.user.uid)
          .collection('subscriptions')
          .where('status', 'in', ['trialing', 'active'])
          .onSnapshot(async snapshot => {
            let subscription: ISubscription | undefined;
            if (!snapshot.empty) {
              const subs = snapshot.docs[0].data();
              const price = (await subs.price.get()).data();
              subscription = SubscriptionWithPrices({
                ...subs,
                price,
              } as ISubscription);
            }

            isMounted &&
              setData(s => ({
                ...s,
                subscription,
                loadingSubscription: false,
              }));
          });
      }
    }
  }, [data.user]);

  return data;
}
