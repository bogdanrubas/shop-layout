import styled from 'styled-components';
import posed from 'react-pose';
import { theme } from '../../config/theme';

export const Wrapper = styled.div``;

export const Title = styled.div`
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    top: 0;
    background: #f4f4f4;
  }

  & {
    cursor: pointer;
    width: 100%;
    margin: 0;
    padding: 15px 0 15px 0;
    box-sizing: border-box;
    user-select: none;
    position: relative;
    text-transform: uppercase;
    font-size: 12px;
    color: ${theme.colors.text.accent};
  }

  svg {
    & {
      transition: 0.45s ${theme.cubicBezier};
      float: right;
      width: 12px;
      ${({ dropdownShow }) =>
        dropdownShow
          ? `
        transform: translateY(2px) rotate(180deg)
      `
          : `
        transform: translateY(2px) rotate(0deg)
      `}
    }

    path {
      stroke: ${theme.colors.text.accent};
      stroke-width: 50;
    }
  }
`;

export const DropdownContainerAnimation = posed.div({
  show: {
    height: 'auto',
    transition: {
      ease: theme.cubicBezierPose,
      duration: 650,
    },
  },
  hide: {
    height: 0,
    transition: {
      ease: theme.cubicBezierPose,
      duration: 650,
    },
  },
});

export const DropdownContainer = styled(DropdownContainerAnimation)`
  box-sizing: border-box;
  overflow: hidden;
`;

export const DropdownElement = styled.span`
  ${({ dropdownShow, dropdownElementAnimationDelay, index }) =>
    theme.animation({
      name: 'fade',
      toggle: dropdownShow,
      delay: dropdownShow ? index * dropdownElementAnimationDelay : 0,
      value: {
        x: '0',
        y: '20px',
      },
    })};
  min-width: 30px;
  text-align: center;
  user-select: none;
  display: inline-block;
  margin: 5px 10px 5px 0;
  position: relative;
  border-radius: 5px;
  font-size: 12px;
  padding: 8px 10px;
  ${({ available }) =>
    available
      ? `
    background: white;
    box-shadow: 0px 2px 20px -1px rgba(0, 0, 0, .08);
    color: ${theme.colors.accent}
    cursor: pointer;
  `
      : `
    background: transparent;
    color: ${theme.colors.text.normal};
  `}
  ${({ chosen }) =>
    chosen
      ? `
    color: white;
    background: black;
    box-shadow: 0px 2px 20px -1px rgba(0, 0, 0, .14);
  `
      : `

  `}
`;

export const DropdownContent = styled.div`
  ${({ dropdownShow }) =>
    theme.animation({
      name: 'fade',
      toggle: dropdownShow,
      delay: 0,
      value: {
        x: '0',
        y: '20px',
      },
    })};
`;
