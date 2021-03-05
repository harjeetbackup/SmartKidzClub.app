import Button from 'components/core/button';
import Form from 'components/core/form';
import Grid, { GridCell } from 'components/core/grid';
import Input from 'components/core/input';
import { ISignUp } from 'models';
import Head from 'next/head';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Sign Up | SmarkKidzClub Premium App</title>
      </Head>

      <Grid
        areas={{
          xs: ['signup/4', 'content/4'],
          m: ['./4 signup/4 ./4', './4 content/4 ./4'],
        }}
      >
        <GridCell area='signup' as='h1'>
          Sign Up
        </GridCell>

        <Form<ISignUp> area='content'>
          {form => (
            <>
              <Input
                required
                name='email'
                type='email'
                label='Email'
                customForm={form}
              />

              <Input
                required
                name='password'
                type='password'
                label='Password'
                customForm={form}
              />

              <Input
                required
                name='code'
                label='Redeem Code'
                customForm={form}
              />

              <Button type='submit'>Add Access</Button>
            </>
          )}
        </Form>
      </Grid>
    </>
  );
};

export default Page;
