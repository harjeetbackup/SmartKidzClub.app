import styled from 'styled-components';
import v from 'styles/variables';
import Button from '../button';

export const CloseButton = styled(Button)`
  background: transparent;
  color: white;
  opacity: 1;
  text-transform: uppercase;
  padding: ${v.size.px2};
  margin: 0;
  margin-bottom: ${v.size.px2};
  font-size: ${v.size.px50};
  border: none;
  &:focus {
    color: ${v.color.red};
    text-shadow: 0 0 10px ${v.color.white};
  }
`;
