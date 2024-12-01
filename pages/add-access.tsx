import Button from 'components/core/button';
import Form, { IFormSubmit, Validations } from 'components/core/form';
import Input from 'components/core/input';
import Overlay, { LoadIcon } from 'components/core/overlay';
import config from 'config';
import { IAccess } from 'models';
import Head from 'next/head';
import { useState } from 'react';
import { toast } from 'react-toast';
import Wrapper, { Heading } from 'styles/pages/access';
import { string } from 'superstruct';

const API_URL = `https://${config.firebase.location}-${config.firebase.projectId}.cloudfunctions.net/addAccess`;

const Page = () => {
  const [data, setData] = useState({} as IAccess);
  const [loading, setLoading] = useState(false);

  async function onSubmit(form: IFormSubmit) {
    toast.hideAll();
    if (!form.valid) return;
    const { class_code, ...rest } = form.data as IAccess;
    try {
      setLoading(true);
      const res = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({ ...rest, class_code: class_code.toUpperCase() }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then(r => r.json())
        .finally(() => setLoading(false));

      if (res.success) {
        toast.success(res.message);
        setData({ class_code: '', email: '' });
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
        <title>Add Access | SmartKidzClub Premium App</title>
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
          Welcome Back
        </Heading>

        <Form<IAccess>
          area='content'
          data={data}
          onSubmit={onSubmit}
          validations={{
            class_code: string(),
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
                name='class_code'
                label='Redeem Code'
                customForm={form}
              />

              <Button type='submit' disabled={loading}>
                Add Access
              </Button>
            </>
          )}
        </Form>
      </Wrapper>
    </>
  );
};

export default Page;
