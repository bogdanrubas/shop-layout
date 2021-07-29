import styled from 'styled-components';
import { theme } from 'config/theme';

export const ButtonWrapper = styled.div`
  &:focus {
    outline: none;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0.7;
    transition: 0.55s ${theme.cubicBezier};
    ${({ theme, type }) =>
      type === 'gray'
        ? 'box-shadow: 0px 5px 50px -8px #666'
        : `box-shadow: 0px 5px 50px -8px black`};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    & {
      transform: scaleX(1.02) scaleY(1.05);
      background-position: 50%;
    }
  }

  & {
    ${({ gridArea }) =>
      gridArea
        ? `
      grid-area: ${gridArea};
    `
        : `

    `}
    width: 100%;
    box-sizing: border-box;
    display: inline-block;
    transition: 0.35s ${theme.cubicBezier};
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    color: white;
    padding: 10px 15px;
    text-align: center;
    position: relative;
    border-radius: 4px;
    user-select: none;
    ${({ type }) =>
      type === 'gray'
        ? `
      background: linear-gradient(to right bottom, #666, #333);
    `
        : `
      background: linear-gradient(to right bottom, black, #666);
    `};
    background-size: 200% 100%;
  }
`;
