import {
  ChangeEvent,
  DetailedHTMLProps,
  FormHTMLAttributes,
  useState,
} from 'react';
import { assert, object, Struct } from 'superstruct';
import StyledForm from './style';
import { formatError } from './validations';
export { default as Validations } from './validations';

type CustomEvent = {
  name: string;
  value: any;
  event: ChangeEvent<HTMLInputElement>;
};

export interface IFormState<T = any> {
  data: T;
  errors: { [k in keyof T]?: string };
  onValueChange: (p: CustomEvent) => void;
}

export default function Form<T = any>({
  data = {} as any,
  errors = {},
  validations,
  children,
  ...p
}: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
  area?: string;
  data?: T;
  errors?: { [k in keyof T]?: string };
  validations?: { [k in keyof T]?: Struct<any, any> };
  children: (p: IFormState<T>) => React.ReactNode;
}) {
  const [state, setState] = useState({ data, errors });

  function onValueChange(e: CustomEvent) {
    const field = { [e.name]: e.value };
    const validation = { [e.name]: (validations as any)[e.name] };
    try {
      assert(field, object(validation));
      setState(s => ({
        data: { ...s.data, ...field },
        errors: { ...s.errors, [e.name]: undefined },
      }));
    } catch (err) {
      const errors = formatError(err);
      setState(s => ({
        data: { ...s.data, ...field },
        errors: { ...s.errors, ...errors },
      }));
    }
  }

  function onSubmit(e: any) {
    e?.preventDefault?.();
    if (validations) {
      try {
        assert(state.data, object(validations as any));
      } catch (err) {
        const errors = formatError(err);
        setState(s => ({ ...s, errors }));
      }
    }
  }

  return (
    <StyledForm {...(p as any)} onSubmit={onSubmit}>
      {typeof children === 'function'
        ? children({ ...state, onValueChange })
        : children}
    </StyledForm>
  );
}
