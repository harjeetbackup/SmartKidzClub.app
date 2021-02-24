export const IsNullOrUndefined = (val: any) => [null, undefined].includes(val);
export const RandomId = () => Math.random().toString(36).slice(2);

export function StopEvent(event: any) {
  if (event) {
    event.preventDefault && event.preventDefault();
    event.stopPropagation && event.stopPropagation();
  }
}

/** `true` means client-side render, `false` means server-side render */
export const IsCSR = typeof window !== 'undefined';

export function ToBool(v: any) {
  return [true, 'true', 1].includes(v);
}
