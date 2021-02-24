/** `true` means client-side render, `false` means server-side render */
export const IsCSR = typeof window !== 'undefined';

export function ToBool(v: any) {
  return [true, 'true', 1].includes(v);
}
