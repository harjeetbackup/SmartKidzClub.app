// @ts-ignore
import isEmail from 'is-email';
import { define } from 'superstruct';

export function formatError(err: any) {
  const errors = {} as any;
  for (const e of err.failures()) {
    const { key, value, type } = e;
    if (value === undefined) {
      errors[key] = 'is required';
    } else if (type === 'never') {
      errors[key] = 'is unknown field';
    } else {
      errors[key] = 'is invalid';
    }
  }
  return errors;
}

export default {
  email: define('email', isEmail),
  code: define('code', v => {
    return /[0-9a-zA-Z]{6,6}/.test(String(v || ''));
  }),
};
