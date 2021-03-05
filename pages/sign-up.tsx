import Button from 'components/core/button';
import Checkbox from 'components/core/checkbox';
import Form, { IFormSubmit, Validations } from 'components/core/form';
import Input from 'components/core/input';
import Overlay, { Rotate } from 'components/core/overlay';
import config from 'config';
import { ISignUp } from 'models';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toast';
import Wrapper, { Agreement, Heading } from 'styles/pages/access';
import { boolean, size, string, trimmed } from 'superstruct';

const API_URL = `https://${config.firebase.location}-${config.firebase.projectId}.cloudfunctions.net/signup`;

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ agreement: false } as ISignUp);

  async function onSubmit(form: IFormSubmit) {
    toast.hideAll();
    if (!form.valid) return;
    try {
      setLoading(true);
      const res = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(form.data),
      })
        .then(r => r.json())
        .finally(() => setLoading(false));

      if (res.success) {
        toast.success(res.message);
        setData({ class_code: '', email: '', password: '', agreement: false });
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <>
      <Head>
        <title>Sign Up | SmarkKidzClub Premium App</title>
      </Head>

      {loading && (
        <Overlay>
          Please wait... <Rotate>⌛</Rotate>
        </Overlay>
      )}

      <Wrapper
        areas={{
          xs: ['signup/4', 'content/4'],
          m: ['./4 signup/4 ./4', './4 content/4 ./4'],
        }}
      >
        <Heading area='signup' as='h1'>
          Sign Up
        </Heading>

        <Form<ISignUp>
          area='content'
          data={data}
          onSubmit={onSubmit}
          validations={{
            password: string(),
            agreement: boolean(),
            passwordCnf: string(),
            email: Validations.email,
            class_code: trimmed(size(string(), 6, 6)),
          }}
        >
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
                type='password'
                name='password'
                label='Password'
                customForm={form}
              />

              <Input
                required
                type='password'
                name='passwordCnf'
                label='Confirm Password'
                customForm={form}
              />

              <Input
                required
                maxLength={6}
                minLength={6}
                name='class_code'
                label='Redeem Code'
                customForm={form}
              />

              <Agreement>
                <Checkbox required name='agreement' customForm={form}>
                  <div>
                    I agree to{' '}
                    <Link href='/terms-of-use'>
                      <a>Terms of use</a>
                    </Link>
                    &nbsp;and&nbsp;
                    <Link href='/privacy-policy'>
                      <a>Privacy policy</a>
                    </Link>
                  </div>
                </Checkbox>
              </Agreement>

              <Button type='submit'>Sign Up</Button>
            </>
          )}
        </Form>
      </Wrapper>
    </>
  );
};

export default Page;
