import { IChildren, IProduct } from 'models';
import { createContext, useContext, useEffect, useState } from 'react';

type Ctx = {
  products: Readonly<IProduct[]>;
};

const GlobalCtx = createContext<Ctx>({ products: [] });

const GlobalProvider = ({ children, products }: IChildren & Ctx) => {
  const [data, setData] = useState({
    products,
  });

  useEffect(() => {
    setData(s => ({ ...s, products }));
  }, [products]);

  return <GlobalCtx.Provider value={data}>{children}</GlobalCtx.Provider>;
};

export const useGlobal = () => useContext(GlobalCtx);

export default GlobalProvider;
