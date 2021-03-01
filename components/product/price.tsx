import { IPrice } from 'models';
import { BestValue, StyledPrice } from './style';

export default function Price(
  props: IPrice & {
    className?: string;
    selectable?: boolean;
    onClick?: () => void;
  }
) {
  return (
    <StyledPrice
      onClick={props.onClick}
      className={props.className}
      selectable={props.selectable}
    >
      <span>
        {props.interval_count} {props.formatted?.interval}
      </span>
      <b>{props.formatted?.price}</b>
      <small>{props.formatted?.type}</small>
      {props.bestValue && <BestValue className='best'>Best Value</BestValue>}
    </StyledPrice>
  );
}
