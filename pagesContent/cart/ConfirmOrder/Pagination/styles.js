import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  &::after {
    content: "";
    display: block;
    position: absolute;
    margin-top: 63px;
    width: 30px;
    height: 3px;
    border-radius: 10px;
    background: linear-gradient(to right, ${theme.colors.brandColor1}, ${theme.colors.brandColor2});
  }

  & {
    ${theme.media.smallDesktopUp} {
      ${theme.appear({
        name: "fade",
        delay: 50,
        value: {
          x: 0,
          y: 20
        }
      })};
    }
    display: flex;
    justify-content: center;
  }
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
    ${({ active }) => active ? `
      border: 1px solid black;
      transform: scale(.85);
    ` : `
      border: 1px solid transparent;
      transform: scale(0);
    `};
  }

  & {
    cursor: pointer;
    transition: .35s ${theme.cubicBezier};
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
		color: #707070;
    ${({ active }) => active ? `
      color: black;
      transform: scale(1.25);
    ` : `
    `};
  }
`;
