import Button from 'components/core/button';
import Form, { Validations } from 'components/core/form';
import Grid, { GridCell } from 'components/core/grid';
import Input from 'components/core/input';
import { ISignUp } from 'models';
import Head from 'next/head';
import { useEffect } from 'react';
import { string } from 'superstruct';

const Page = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Access | SmarkKidzClub Premium App</title>
      </Head>

      <Grid
        areas={{
          xs: ['access/4', 'content/4'],
          m: ['./4 access/4 ./4', './4 content/4 ./4'],
        }}
      >
        <GridCell area='access' as='h1'>
          Access
        </GridCell>

        <Form<Omit<ISignUp, 'password'>>
          area='content'
          validations={{ code: string(), email: Validations.email }}
          onSubmit={console.log}
        >
          {form => (
            <>
              <Input
                // required
                name='email'
                // type='email'
                label='Email'
                customForm={form}
              />

              <Input
                // required
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
