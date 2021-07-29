import styled from 'styled-components';
import posed from 'react-pose';
import { theme } from 'config/theme';

export const SortingOptionsWrapper = styled.div`
  position: relative;
  ${({ appear }) => appear !== undefined ? theme.appear(appear) : ""};
`;

export const Toggle = styled.p`
  & {
    position: relative;
    cursor: pointer;
    margin: 0;
    padding: 10px 0;
    box-sizing: border-box;
    user-select: none;
    border-bottom: 1px solid;
    ${({ dropdownShow }) => dropdownShow ? `
      transition: border-color .35s;
      border-color: transparent;
    ` : `
      transition: border-color .25s;
      border-color: #eee;
    `}
  }

  svg {
    & {
      transition: .35s ${theme.cubicBezier};
      margin-top: 6px;
      float: right;
      width: 12px;
      ${({ dropdownShow }) => dropdownShow ? `
        transform: rotate(180deg)
      ` : `
        transform: rotate(0deg)
      `}
    }

    path {
      stroke: black;
      stroke-width: 50;
    }
  }
`;

const DropdownAnimation = posed.div({
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      ease: theme.cubicBezierPose,
      duration: 550
    }
  },
  close: {
    height: "0px",
    opacity: 0,
    transition: {
      ease: theme.cubicBezierPose,
      duration: 550
    }
  }
});

export const Dropdown = styled(DropdownAnimation)`
  top: 46px;
  position: absolute;
  background: white;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  transform-origin: top;
  box-shadow: 0px 5px 25px -8px rgba(0, 0, 0, .11);
  overflow: hidden;
`;

const DropdownElementAnimation = posed.div({
  show: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: (({ delay }) => ({
      delay: delay,
      ease: theme.cubicBezierPose,
      duration: 250
    }))
  },
  hide: {
    transform: "translateY(20px)",
    opacity: 0,
    transition: {
      delay: 100,
      ease: theme.cubicBezierPose,
      duration: 250
    }
  }
});

export const DropdownElement = styled(DropdownElementAnimation)`
  &:last-of-type {
    border: none;
  }

  & {
    position: relative;
    cursor: pointer;
    display: block;
    padding: 7px 10px;
    ${({ active }) => active ? `
			color: black;
      background: white;
      box-shadow: 0px 3px 25px -5px rgba(0, 0, 0, .1);
    ` : `
      background: #fafafa;
      box-shadow: 0px 5px 25px -8px rgba(0, 0, 0, .05);
      color: #707070;
    `}
  }
`;
