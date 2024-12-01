export const size = {
  // default styles should be mobile-first

  /** small devices: 411 */
  xs: 411,
  /** small devices: 576px */
  s: 576,
  /** medium devices: 768px */
  m: 768,
  /** large devices: 992px */
  l: 992,
  /** extra large devices: 1200 */
  xl: 1200,
  /** extra large devices: 1366 */
  xxl: 1366,
};

export type TSize = keyof typeof size;

export type TDeviceSize = {
  [k in keyof typeof size]: number;
};

interface IMediaSize {
  min: TDeviceSize;
  max: TDeviceSize;
}

const _size = size as any;

export const device: IMediaSize = Object.keys(_size).reduce(
  (acc, cur) => {
    acc.min[cur] = `min-width: ${_size[cur]}px`;
    acc.max[cur] = `max-width: ${_size[cur] - 1}px`;
    return acc;
  },
  { min: {} as any, max: {} as any, between: () => '' }
);

const _device = device as any;

const media: IMediaSize & {
  between: (min: keyof TDeviceSize, max: keyof TDeviceSize) => string;
} = Object.keys(_device.min).reduce(
  (acc, cur) => {
    acc.min[cur] = `@media (${_device.min[cur]})`;
    acc.max[cur] = `@media (${_device.max[cur]})`;
    return acc;
  },
  { min: {} as any, max: {} as any, between: () => '' }
);

media.between = (min, max) =>
  `@media (max-width: ${max}px) and (min-width: ${min}px)`;

export default media;
