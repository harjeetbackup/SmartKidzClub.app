import { IChildren, IProduct } from 'models';
import Router from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

type Ctx = {
  via?: Readonly<string>;
  products: Readonly<IProduct[]>;
};

const GlobalCtx = createContext<Ctx>({
  products: [],
});

const GlobalProvider = ({ children, products }: IChildren & Ctx) => {
  const [data, setData] = useState<Ctx>({
    products,
  });

  useEffect(() => {
    setData(s => ({ ...s, via: Router.query.via as string }));
  }, []);

  useEffect(() => {
    setData(s => ({ ...s, products }));
  }, [products]);

  return <GlobalCtx.Provider value={data}>{children}</GlobalCtx.Provider>;
};

export const useGlobal = () => useContext(GlobalCtx);

export default GlobalProvider;
