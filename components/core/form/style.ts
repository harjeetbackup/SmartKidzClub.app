import styled, { css } from 'styled-components';
import v from 'styles/variables';

const Placeholder = css`
  &::-webkit-input-placeholder {
    opacity: 0;
    -webkit-transition: opacity 0.1s;
    transition: opacity 0.1s;
  }

  &:-moz-placeholder,
  &::-moz-placeholder {
    opacity: 0;
    -moz-transition: opacity 0.1s;
    transition: opacity 0.1s;
  }

  &:-ms-input-placeholder {
    opacity: 0;
    -ms-transition: opacity 0.1s;
    transition: opacity 0.1s;
  }

  /* Show */

  &:focus::-webkit-input-placeholder {
    opacity: 1;
  }

  &:focus:-moz-placeholder,
  &:focus::-moz-placeholder {
    opacity: 0.6;
  }

  &:focus:-ms-input-placeholder {
    opacity: 1;
  }
`;

export default styled.form<{ area?: string }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  ${p => p.area && `grid-area: ${p.area}`};
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
`;

export const HintOrError = styled.span<{ error?: boolean }>`
  color: ${p => (p.error ? v.color.red : 'grey')};
  font-size: 0.8rem;
  padding: 0 0.7rem;
  font-family: ${v.font.regular};
`;

export const FormGroup = styled.div`
  position: relative;
  width: 100%;
  font-size: initial;
`;

export const Label = styled.label<{ required?: boolean }>`
  color: ${v.color.black};
  font-size: 1rem;
  font-weight: 400;
  font-family: ${v.font.regular};
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 12px;
  padding: 0 5px;
  transition: 0.2s ease all;
  border-radius: 5px;
  &:empty {
    display: none;
  }
  ${p =>
    p.required &&
    css`
      &::after {
        content: '*';
        margin-left: 2px;
        color: ${v.color.red};
      }
    `}
`;

export const FormControl = css`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 4px 10px;
  display: block;
  font-family: ${v.font.regular};
  width: 100%;
  height: 40px;
  background-color: transparent;
  border-bottom: 1px solid #0000001f;
  transition: border 0.15s ease-in-out;

  ${Placeholder};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${v.color.yellow};
    transition: border 0.15s ease-in-out;
  }

  &:focus ~ ${Label}, &:not(:placeholder-shown) ~ ${Label} {
    left: 6px;
    top: -7px;
    background: white;
    font-size: 12px;
    color: ${v.color.red};
    transition: all 0.15s ease-in-out;
  }

  &:not(:focus) ~ ${Label} {
    color: ${v.color.black};
    transition: all 0.15s ease-in-out;
  }

  /* active state */
  &:focus ~ .bar:before,
  &:focus ~ .bar:after {
    width: 50%;
  }

  /* active state */
  &:focus ~ .highlight {
    -webkit-animation: floatHighlighter 0.3s ease;
    -moz-animation: floatHighlighter 0.3s ease;
    animation: floatHighlighter 0.3s ease;
  }

  @keyframes floatHighlighter {
    from {
      background: ${v.color.red};
    }

    to {
      width: 0;
      background: transparent;
    }
  }
`;

export const StyledInput = styled.input`
  ${FormControl}
`;
