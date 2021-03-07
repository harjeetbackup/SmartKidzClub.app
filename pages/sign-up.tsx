import Button from 'components/core/button';
import Checkbox from 'components/core/checkbox';
import Form, { IFormSubmit, Validations } from 'components/core/form';
import Input from 'components/core/input';
import Overlay, { LoadIcon } from 'components/core/overlay';
import config from 'config';
import { ISignUp } from 'models';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toast';
import Wrapper, { Agreement, Heading } from 'styles/pages/access';
import { boolean, string } from 'superstruct';

const API_URL = `https://${config.firebase.location}-${config.firebase.projectId}.cloudfunctions.net/signup`;

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ agreement: false } as ISignUp);

  async function onSubmit(form: IFormSubmit) {
    toast.hideAll();
    if (!form.valid) return;
    const { passwordCnf, agreement, ...rest } = form.data as ISignUp;
    if (passwordCnf !== rest.password) {
      return toast.warn("Passwords don't match");
    }
    if (!agreement) return;
    try {
      setLoading(true);
      const res = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(rest),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then(r => r.json())
        .finally(() => setLoading(false));

      if (res.success) {
        toast.success(res.message);
        setData({
          email: '',
          password: '',
          class_code: '',
          passwordCnf: '',
          agreement: false,
        });
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
        <title>Sign Up | SmartKidzClub Premium App</title>
      </Head>

      {loading && (
        <Overlay>
          Submitting... <LoadIcon />
        </Overlay>
      )}

      <Wrapper
        areas={{
          xs: ['welcome/4', 'content/4'],
          m: ['./4 welcome/4 ./4', './4 content/4 ./4'],
        }}
      >
        <Heading area='welcome' as='h1'>
          Welcome
        </Heading>

        <Form<ISignUp>
          area='content'
          data={data}
          onSubmit={onSubmit}
          validations={{
            password: string(),
            agreement: boolean(),
            class_code: string(),
            passwordCnf: string(),
            email: Validations.email,
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
                minLength={6}
                type='password'
                name='password'
                label='Password'
                customForm={form}
              />

              <Input
                required
                minLength={6}
                type='password'
                name='passwordCnf'
                label='Confirm Password'
                customForm={form}
              />

              <Input
                required
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

              <Button type='submit' disabled={loading}>
                Sign Up
              </Button>
            </>
          )}
        </Form>
      </Wrapper>
    </>
  );
};

export default Page;
