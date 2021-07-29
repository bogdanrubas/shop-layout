import styled from 'styled-components';
import { theme } from 'config/theme';

export const IconsWrapper = styled.div`
  & {
    grid-area: icons;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 5px 10px 10px;
  }

  svg {
    &:hover {
      transform: scale(1.15);
    }

    & {
      transition: 0.25s;
      cursor: pointer;
      margin: 0px 10px;
    }
  }

  a:last-of-type:hover ~ div {
    opacity: 1;
    pointer-events: all;
    transform: scale(1) translateY(0px);
  }
`;

export const Dropdown = styled.div`
  &:hover {
    opacity: 1;
    pointer-events: all;
    transform: scale(1);
  }

  & {
    transition: 0.25s ${theme.cubicBezier};
    padding: 28px 0 0 0;
    position: absolute;
    top: 50px;
    right: 10px;
    opacity: 0;
    pointer-events: none;
    transform-origin: top;
    transform: scale(0.88);
  }
`;

export const DropdownContainer = styled.div`
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 15px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
  }

  & {
    position: relative;
    background: white;
    box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.085);
    padding: 10px 15px;
    border-radius: 5px;
    text-align: center;
  }

  span {
    &:last-of-type {
      border: none;
    }

    & {
      display: block;
      width: 100%;
      border-bottom: 1px solid #eee;
    }
  }

  a {
    &:hover {
      color: ${theme.colors.text.accent};
      transform: scale(1.05);
    }

    &:last-of-type {
      border: none;
    }

    & {
      width: 100%;
      transition: 0.3s;
      padding: 5px 0;
      display: block;
      color: ${theme.colors.text.normal};
    }
  }
`;
