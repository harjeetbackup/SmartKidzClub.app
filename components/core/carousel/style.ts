import styled from 'styled-components';
import v from 'styles/variables';

// Glide wrapper style
const GlideWrapper = styled.div`
  &:hover {
    .glide__controls {
      opacity: 1;
      visibility: visible;
    }
  }
`;

// Glide slide wrapper style
export const GlideSlideUL = styled.ul`
  padding: ${v.size.px10} 0;
`;

const GlideSlideWrapper = styled.li``;

// Button wrapper style
const ButtonWrapper = styled.div`
  display: inline-block;
`;

// ButtonControlWrapper style
const ButtonControlWrapper = styled.div`
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  > div {
    position: absolute;
    top: calc(50% - 70px / 2);
    &.glide__prev--area {
      left: 0;
    }
    &.glide__next--area {
      right: 0;
    }
  }
`;

// BulletControlWrapper style
const BulletControlWrapper = styled.div``;

// BulletButton style
const BulletButton = styled.button`
  cursor: pointer;
  width: 10px;
  height: 10px;
  margin: 4px;
  border: 0;
  padding: 0;
  outline: none;
  border-radius: 50%;
  background-color: #d6d6d6;

  &:hover,
  &.glide__bullet--active {
    background-color: #869791;
  }
`;

// default button style
const ActionButton = styled.button`
  cursor: pointer;
  color: ${v.color.white};
  background-color: ${v.color.brandYellow};
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: ${v.size.px18};
  text-align: center;
  &:focus,
  &:hover {
    box-shadow: 0 0 5px ${v.color.black};
  }
`;

export {
  GlideSlideWrapper,
  ButtonControlWrapper,
  ButtonWrapper,
  BulletControlWrapper,
  BulletButton,
  ActionButton,
};
export default GlideWrapper;
