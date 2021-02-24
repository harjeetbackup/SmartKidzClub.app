import Button from 'components/core/button';
import { GridCell } from 'components/core/grid';
import styled from 'styled-components';
import media from 'styles/media-query';
import v from 'styles/variables';

export const LogoSmall = styled.img`
  width: 60px;
  ${media.min.s} {
    display: none;
  }
`;

export const Logo = styled.img`
  display: none;
  ${media.min.s} {
    display: block;
    width: 150px;
    padding: 10px;
  }
`;

export const Actions = styled(GridCell)`
  display: flex;
  padding: 10px;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 15px;
`;

export const Menu = styled.ul`
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 1;
  background: ${v.color.white};
  box-shadow: 0 0 10px grey;
  border-radius: 5px;
`;

export const MenuItem = styled.li`
  color: ${v.color.black};
  font-size: ${v.size.px18};
  margin: ${v.size.px2};
  border-radius: 5px;
  button {
    padding: ${v.size.px10};
    background: transparent;
    height: 100%;
    width: 100%;
    border: 2px solid transparent;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    &:focus {
      border: 2px solid ${v.color.brandRed};
    }
  }

  &:hover {
    color: ${v.color.white};
    background-color: ${v.color.brandBlue};
  }

  ${media.min.l} {
    font-size: ${v.size.px16};
  }
`;

export const Profile = styled.div`
  padding: 0.8em 1em;
  font-size: ${v.size.px14};
  border-radius: 10px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  width: fit-content;
  white-space: nowrap;
  color: ${v.color.white};
  cursor: pointer;
  height: 40px;
  outline-color: ${v.color.white};
  background-color: ${v.color.brandRed};
  position: relative;

  ${media.min.s} {
    span.title {
      display: inline-block;
    }
  }
`;

export const ActionButton = styled(Button)`
  color: #333;
  display: flex;
  grid-gap: 5px;

  &.secondary {
    color: ${v.color.white};
    background-color: ${v.color.brandRed};
  }
`;

export default styled.header`
  height: 80px; /* 64 + 16px */
  z-index: ${v.zIndex.header};
  position: sticky;
  top: 0px;
  left: 0px;
  & > div {
    box-shadow: 0 0 3px;
    background: ${v.color.brandYellow};
    position: sticky;
    top: 0px;
    left: 0px;
  }
`;
