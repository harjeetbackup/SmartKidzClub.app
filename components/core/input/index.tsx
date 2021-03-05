import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { IFormState } from '../form';
import { FormGroup, HintOrError, Label, StyledInput } from '../form/style';

export type OnChangeCustom = (p: {
  name: string;
  value: any;
  event: ChangeEvent<HTMLInputElement>;
}) => void;

export default function Input({
  hint,
  error,
  label,
  customForm,
  placeholder,
  onChangeCustom,
  ...p
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  label: string;
  hint?: string;
  error?: string;
  customForm?: IFormState;
  onChangeCustom?: OnChangeCustom;
}) {
  if (customForm) {
    p.value = customForm.data?.[p.name] || '';
    error = customForm.errors?.[p.name];
    onChangeCustom = customForm.onValueChange;
  }

  return (
    <FormGroup>
      <StyledInput
        {...(p as any)}
        id={p.name}
        onChange={e =>
          p.onChange?.(e) ||
          onChangeCustom?.({ name: p.name!, value: e.target.value, event: e })
        }
        placeholder={placeholder || (typeof label === 'string' ? label : ' ')}
      />
      <Label htmlFor={p.id || p.name} required={p.required}>
        {label}
      </Label>
      <HintOrError error={!!error}>{error || hint}</HintOrError>
    </FormGroup>
  );
}
