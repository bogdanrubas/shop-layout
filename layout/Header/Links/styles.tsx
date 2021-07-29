import styled, { keyframes, css } from 'styled-components';
import { theme } from '../../../config/theme';

export const Wrapper = styled.ul`
  grid-area: links;
  margin: 0;
  padding: 0;
  position: relative;
  ${theme.media.tabletLandscapeDown} {
    display: none;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Category = styled.li`
  cursor: default;
  letter-spacing: 1px;
  padding: 25px 15px;
  text-transform: uppercase;
  font-size: 14px;
  list-style: none;
`;

const triangleAnimation = keyframes`
  0% {
    transform: translateX(-50%) translateY(10px);
  }
  100% {
    transform: translateX(-50%) translateY(0px);
  }
`;

const applyAnimation = () => css`
  animation: ${triangleAnimation} .35s backwards 0.05s;
`;

interface DropdownWrapperProps {
  dropdownTriangleLeftPosition?: number;
  shouldDropdownShow?: boolean;
  dropdownLeftPosition?: number;
}

export const DropdownWrapper = styled.div<DropdownWrapperProps>`
  &::before {
    transform: translateX(-50%);
    transition: .35s;
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid white;
    top: 4px;
    z-index: 1;
    left: ${({ dropdownTriangleLeftPosition }) => dropdownTriangleLeftPosition}px;
    ${({ shouldDropdownShow }) => shouldDropdownShow ? applyAnimation : null}
  }

  & {
    transition: left .35s ${theme.cubicBezier}, opacity .25s, transform .25s;
    left: ${({ dropdownLeftPosition }) => dropdownLeftPosition + "px"};
    transform: scale(.92);
    transform-origin: top;
    top: 65px;
    padding: 10px 0 0 0;
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  ${Categories}:hover & {
    opacity: 1;
    pointer-events: all;
    transform: scale(1);
  }
`;

interface DropdownContentProps {
  dropdownWidth?: number;
  dropdownHeight?: number;
}

export const DropdownContent = styled.div<DropdownContentProps>`
  transition: .65s ${theme.cubicBezier};
  box-sizing: border-box;
  padding: 20px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  background: white;
  width: ${({ dropdownWidth }) => dropdownWidth}px;
  height: ${({ dropdownHeight }) => dropdownHeight}px;
  box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, .15);
`;

interface CategoryContentProps {
  i: number;
  actualDropdown?: number;
  shouldDropdownShow?: boolean;
}
export const CategoryContent = styled.div<CategoryContentProps>`
  transition: .35s;
  position: absolute;
  display: flex;
  flex-direction: row;

  ${({ i, actualDropdown }) =>
    // @ts-ignore
    i > actualDropdown ? `
    transition-delay: 50ms;
    transform: translateX(70px);
    pointer-events: none;
    opacity: 0;
  ` : ``};

${({ i, actualDropdown }) =>
    // @ts-ignore
    i < actualDropdown ? `
    transition-delay: 50ms;
    transform: translateX(-70px);
    pointer-events: none;
    opacity: 0;
  ` : ``};

${({ i, actualDropdown }) =>
    // @ts-ignore
    i == actualDropdown ? `
    transition-delay: 80ms;
    transform: translateX(0px);
    pointer-events: auto;
    opacity: 1;
  ` : ``};

${({ shouldDropdownShow }) =>
    // @ts-ignore
    shouldDropdownShow === false ? `
    transition-delay: 50ms;
    transform: translateX(0px);
    pointer-events: none;
    opacity: 0;
  ` : ``};
`;

export const Column = styled.div`
  & {
    white-space: nowrap;
    margin: 0 40px 0 0;
    display: inline-block;
  }

  p {
    letter-spacing: 1px;
    margin: 0 0 6px 0;
    font-size: 14px;
    text-transform: uppercase;
  }

  a {
    &:hover {
      transform: translateX(1px);
      color: black;
    }

    & {
      transition: transform .25s, color .35s;
      padding: 0 0 1px 0;
      display: block;
      text-decoration: none;
      color: #707070;
    }
  }
`;
