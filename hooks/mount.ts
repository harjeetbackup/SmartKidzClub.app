import { useEffect, useRef } from 'react';

export const useInitialMount = () => {
  const refInitialMount = useRef(true);
  useEffect(() => {
    refInitialMount.current = false;
  }, []);
  return refInitialMount.current;
};

const useIsMounted = () => {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted.current;
};

export default useIsMounted;
