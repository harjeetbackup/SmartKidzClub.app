import Grid from 'components/core/grid';
import FreeTrialButton from 'components/free-trial-button';
import { useGlobal } from 'context/global';
import Hint from './hint';
import Price from './price';
import Wrapper, { AllPrices, Heading, Products } from './style';

const placeholder = [...Array(3).fill(1).keys()];
console.log(placeholder);

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
        <Heading>Unlock Unlimited Learning</Heading>

        {products.length ? (
          products.map(p => (
            <Products key={p.name}>
              <AllPrices>
                {p.prices.map(m => (
                  <Price key={m.id} {...m} />
                ))}
              </AllPrices>
            </Products>
          ))
        ) : (
          <>
            {/* <Products>
              <AllPrices>
                {placeholder.map(m => (
                  <Loading key={m}>
                    <StyledPrice>
                      <span>&nbsp;</span>
                      <b>&nbsp;</b>
                      <span>&nbsp;</span>
                    </StyledPrice>
                  </Loading>
                ))}
              </AllPrices>
            </Products> */}
          </>
        )}

        <FreeTrialButton />

        <Hint />
      </Wrapper>
    </Grid>
  );
}
