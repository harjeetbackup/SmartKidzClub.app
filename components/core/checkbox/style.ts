import styled from 'styled-components';
import v from 'styles/variables';

export const LabelWrapper = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const FauxCheckbox = styled.b<{ checked: boolean }>`
  height: 18px;
  width: 18px;
  position: absolute;
  left: 0;
  border: 1px solid;
  display: inline-block;
  border-radius: 4px;
  display: inline-flex;
  place-content: center;
  justify-content: center;

  &::after {
    content: 'L';
    font-weight: bolder;
    font-family: ${v.font.regular};
    font-size: 14px;
    color: ${p => (p.checked ? v.color.red : v.color.white)};
    transform: rotate(45deg) scaleX(-1);
    user-select: none;
    width: fit-content;
    height: fit-content;
  }
`;

export default styled.span`
  position: relative;
  width: fit-content;
  cursor: pointer;
  input[type='checkbox'] {
    opacity: 0;
    z-index: -1;
    height: 18px;
    width: 18px;
    vertical-align: initial;
  }
`;
