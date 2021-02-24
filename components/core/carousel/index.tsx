import Glide, { Options } from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import clsx from 'clsx';
import { IChildren } from 'models';
import { Fragment, HTMLAttributes, useEffect } from 'react';
import GlideWrapper, {
  ActionButton,
  BulletButton,
  BulletControlWrapper,
  ButtonControlWrapper,
  ButtonWrapper,
  GlideSlideUL,
} from './style';

export const Slide = (p: HTMLAttributes<HTMLLIElement>) => (
  <li {...p} className={clsx('glide__slide', p.className)}>
    {p.children}
  </li>
);

const GlideCarousel = ({
  className,
  children,
  options,
  controls,
  prevButton,
  nextButton,
  prevWrapper,
  nextWrapper,
  bullets,
  numberOfBullets,
  buttonWrapperStyle,
  bulletWrapperStyle,
  bulletButtonStyle,
  id,
}: {
  options: Options;
  className?: string;
  controls?: boolean;
  bullets?: boolean;
  numberOfBullets?: number;
  bulletWrapperStyle?: any;
  prevButton?: JSX.Element;
  nextButton?: JSX.Element;
  prevWrapper?: any;
  nextWrapper?: any;
  buttonWrapperStyle?: any;
  bulletButtonStyle?: any;
  id?: string;
} & IChildren) => {
  // number of bullets loop
  const totalBullets = [];
  for (let i = 0; i < (numberOfBullets || 0); i++) {
    totalBullets.push(i);
  }

  // Load glide
  useEffect(() => {
    new Glide(id ? `#${id}` : '#glide', options).mount();
  });

  return (
    <GlideWrapper id={id || 'glide'} className={clsx('glide', className)}>
      <div className='glide__track' data-glide-el='track'>
        <GlideSlideUL className='glide__slides'>{children}</GlideSlideUL>
      </div>

      {/** if controls prop true then show glide controls nav */}
      {controls && (
        <ButtonControlWrapper
          className='glide__controls'
          data-glide-el='controls'
          {...buttonWrapperStyle}
        >
          <ButtonWrapper
            {...prevWrapper}
            className='glide__prev--area'
            data-glide-dir='<'
            aria-label='prev'
          >
            {prevButton ? (
              prevButton
            ) : (
              <ActionButton type='button'>ᐊ</ActionButton>
            )}
          </ButtonWrapper>
          <ButtonWrapper
            {...nextWrapper}
            className='glide__next--area'
            data-glide-dir='>'
            aria-label='next'
          >
            {nextButton ? (
              nextButton
            ) : (
              <ActionButton type='button'>ᐅ</ActionButton>
            )}
          </ButtonWrapper>
        </ButtonControlWrapper>
      )}

      {/** if bullets prop true then show glide bullets nav */}
      {bullets && (
        <BulletControlWrapper
          className='glide__bullets'
          data-glide-el='controls[nav]'
          {...bulletWrapperStyle}
        >
          <Fragment>
            {totalBullets.map(index => (
              <BulletButton
                key={index}
                className='glide__bullet'
                data-glide-dir={`=${index}`}
                aria-label={`bullet${index + 1}`}
                {...bulletButtonStyle}
              />
            ))}
          </Fragment>
        </BulletControlWrapper>
      )}
    </GlideWrapper>
  );
};

export default GlideCarousel;
