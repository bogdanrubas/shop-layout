import styled from 'styled-components';
import posed from 'react-pose';
import { theme } from 'config/theme';

export const TypeWrapper = styled.div`
  ${({ appear }) => appear !== undefined ? theme.appear(appear) : ""};
  ${({ animation }) => animation !== undefined ? theme.animation(animation) : ""};
`;

export const Toggle = styled.div`
  & {
    ${({ appear }) => appear !== undefined ? theme.appear(appear) : ""};
    ${({ animation }) => animation !== undefined ? theme.animation(animation) : ""};
    cursor: pointer;
    width: 100%;
    margin: 0;
    padding: 10px 20px 10px 20px;
    box-sizing: border-box;
    user-select: none;
    text-transform: uppercase;
    font-size: ${theme.font.small};
  }

  svg {
    & {
      float: right;
      width: 12px;
      transition: .35s ${theme.cubicBezier};
      ${({ dropdownShow }) => dropdownShow ? `
        transform: translateY(2px) rotate(180deg)
      ` : `
        transform: translateY(2px) rotate(0deg)
      `}
    }

    path {
      stroke: black;
      stroke-width: 50;
    }
  }
`;

const DropdownAnimation = posed.div({
  opened: {
    height: "auto",
    transition: {
      duration: 500,
      ease: theme.cubicBezierPose
    }
  },
  closed: {
    height: 0,
    transition: {
      duration: 500,
      delay: 110,
      ease: theme.cubicBezierPose
    }
  }
});

export const Dropdown = styled(DropdownAnimation)`
  ${({ appear }) => appear !== undefined ? theme.appear(appear) : ""};
  ${({ animation }) => animation !== undefined ? theme.animation(animation) : ""};
  padding: 0 20px 0 20px;
  box-sizing: border-box;
`;

export const FilterTypeElement = styled.div`
  min-width: 21px;
  text-align: center;
  user-select: none;
  display: inline-block;
  cursor: pointer;
  margin: 5px 10px 5px 0;
  position: relative;
  transition: .35s;
  border-radius: 5px;
  font-size: ${theme.font.small};
  padding: 8px 10px;
  ${({ chosen }) => chosen ? `
    top: -2px;
    box-shadow: 0px 2px 20px -1px rgba(0, 0, 0, .35);
    background: black;
    color: white;
  ` : `
    top: 0px;
    box-shadow: 0px 2px 20px -1px rgba(0, 0, 0, .08);
    background: #eee;
    color: #707070;
  `};
  ${({ animation }) => animation !== undefined ? theme.animation(animation) : ""};
`;
