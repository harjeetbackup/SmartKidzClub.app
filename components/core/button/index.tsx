import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';
import StyledButton from './style';

const Button = forwardRef<
  any,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { colorProfile?: 'primary' | 'secondary'; flipColor?: boolean }
>(({ children, flipColor, colorProfile, type = 'button', ...p }, ref) => (
  <StyledButton
    {...p}
    ref={ref}
    type={type}
    className={clsx(p.className, colorProfile, flipColor && 'flip')}
  >
    {children}
  </StyledButton>
));

export default Button;
