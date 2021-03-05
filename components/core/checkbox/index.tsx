import { IChildren } from 'models';
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { IFormState } from '../form';
import { FormGroup, HintOrError } from '../form/style';
import StyledInput, { FauxCheckbox, LabelWrapper } from './style';

export type OnChangeCustom = (p: {
  name: string;
  value: any;
  event: ChangeEvent<HTMLInputElement>;
}) => void;

export default function Checkbox({
  hint,
  error,
  children,
  customForm,
  onChangeCustom,
  ...p
}: Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'type'
> &
  IChildren & {
    name: string;
    hint?: string;
    error?: string;
    customForm?: IFormState;
    onChangeCustom?: OnChangeCustom;
  }) {
  if (customForm) {
    p.checked = customForm.data?.[p.name] || '';
    error = customForm.errors?.[p.name];
    onChangeCustom = customForm.onValueChange;
  }

  return (
    <FormGroup>
      <LabelWrapper>
        <StyledInput>
          <input
            {...(p as any)}
            type='checkbox'
            id={p.name}
            onChange={e =>
              p.onChange?.(e) ||
              onChangeCustom?.({
                name: p.name!,
                value: e.target.checked,
                event: e,
              })
            }
          />
          <FauxCheckbox checked={p.checked!} />
        </StyledInput>
        {children}
      </LabelWrapper>
      <HintOrError error={!!error}>{error || hint}</HintOrError>
    </FormGroup>
  );
}
