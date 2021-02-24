import clsx from 'clsx';
import { IChildren } from 'models';
import { forwardRef, HTMLAttributes } from 'react';
import StyledButton from './style';

const Button = forwardRef<
  any,
  HTMLAttributes<HTMLButtonElement> &
    IChildren & { colorProfile?: 'primary' | 'secondary'; flipColor?: boolean }
>(({ children, flipColor, colorProfile, ...p }, ref) => (
  <StyledButton
    {...p}
    type='button'
    ref={ref}
    className={clsx(p.className, colorProfile, flipColor && 'flip')}
  >
    {children}
  </StyledButton>
));

export default Button;
