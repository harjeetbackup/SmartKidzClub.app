import { IProduct } from 'models';
import { FormattedPrice } from './price';

function organize(prods: Readonly<IProduct[]> = []) {
  const state = (prods || []).filter(f => f.prices.length);
  state.forEach(f => {
    f.prices = f.prices
      .map(m => ({ ...m, formatted: FormattedPrice(m) }))
      .sort((a, b) => (a.seq > b.seq ? 1 : -1));
  });
  return state;
}

export async function ProductsWithPrices(
  db: firebase.default.firestore.Firestore
) {
  // const isLocalHost = _host.includes('localhost');
  const colProducts = await db
    .collection('products')
    .where('active', '==', true)
    //   .where('origin', isLocalHost ? '!=' : '==', _host)
    .get();

  const products: IProduct[] = [];

  for (let i = 0; i < colProducts.docs.length; i++) {
    const snapProduct = colProducts.docs[i];
    const product = snapProduct.data();
    const snapPrice = await snapProduct.ref
      .collection('prices')
      .where('active', '==', true)
      .orderBy('unit_amount')
      .get();
    const prices = snapPrice.docs.map(d => ({ ...d.data(), id: d.id }));
    products.push({
      //   _host,
      ...product,
      prices,
    } as any);
  }

  return organize(products);
}
