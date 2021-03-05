import Button from 'components/core/button';
import Form, { IFormSubmit, Validations } from 'components/core/form';
import Input from 'components/core/input';
import Overlay, { Rotate } from 'components/core/overlay';
import config from 'config';
import { IAccess } from 'models';
import Head from 'next/head';
import { useState } from 'react';
import { toast } from 'react-toast';
import Wrapper, { Heading } from 'styles/pages/access';
import { size, string, trimmed } from 'superstruct';

const API_URL = `https://${config.firebase.location}-${config.firebase.projectId}.cloudfunctions.net/addAccess`;

const Page = () => {
  const [data, setData] = useState({} as IAccess);
  const [loading, setLoading] = useState(false);

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
        <title>Access | SmarkKidzClub Premium App</title>
      </Head>

      {loading && (
        <Overlay>
          Please wait... <Rotate>⌛</Rotate>
        </Overlay>
      )}

      <Wrapper
        areas={{
          xs: ['access/4', 'content/4'],
          m: ['./4 access/4 ./4', './4 content/4 ./4'],
        }}
      >
        <Heading area='access' as='h1'>
          Access
        </Heading>

        <Form<IAccess>
          area='content'
          data={data}
          onSubmit={onSubmit}
          validations={{
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
                maxLength={6}
                minLength={6}
                name='class_code'
                label='Redeem Code'
                customForm={form}
              />

              <Button type='submit'>Add Access</Button>
            </>
          )}
        </Form>
      </Wrapper>
    </>
  );
};

export default Page;
