import Grid from 'components/core/grid';
import FreeTrialButton from 'components/free-trial-button';
import { useGlobal } from 'context/global';
import Hint from './hint';
import Price from './price';
import Wrapper, { AllPrices, Heading, Products } from './style';

export default function PriceList() {
  const { products } = useGlobal() || [];

  return (
    <Grid
      id='pricelist'
      areas={{
        xs: ['content/4'],
        m: ['./2 content/6 ./2'],
      }}
    >
      <Wrapper area='content'>
        <Heading>Unlock unlimited learning</Heading>

        {products.map(p => (
          <Products key={p.name}>
            <b>{p.name}</b>
            <AllPrices>
              {p.prices.map(m => (
                <Price key={m.id} {...m} />
              ))}
            </AllPrices>
          </Products>
        ))}

        <FreeTrialButton />

        <Hint />
      </Wrapper>
    </Grid>
  );
}
