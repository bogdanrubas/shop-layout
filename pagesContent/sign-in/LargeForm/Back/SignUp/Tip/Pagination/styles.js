import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  ${({  toggleAnimation }) => theme.animation({
    name: 'fade',
    toggle: toggleAnimation,
    delay: toggleAnimation ? 620 : 0,
    value: {
      x: 0,
      y: "20px"
    }
  })};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 0 40px 0;
`;

export const Circle = styled.div`
  &::before {
    transition: .35s ${theme.cubicBezier};
    content: "";
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index: -1;
    ${({  active }) => active ? `
      border: 1px solid black;
      transform: scale(.75);
    ` : `
      border: 1px solid transparent;
      transform: scale(0);
    `}
  }

  & {
    cursor: default;
    transition: .35s ${theme.cubicBezier};
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    ${({  active }) => active ? `
      color: black;
      transform: scale(1.45);
    ` : `
      color: #707070;
    `}
  }
`;
