import styled from 'styled-components';
import { theme } from 'config/theme';

export const SearchBarWrapper = styled.div`
  & {
    ${({ appear }) => appear !== undefined ? theme.appear(appear) : ""};
    ${({ animation }) => animation !== undefined ? theme.animation(animation) : ""};
    width: calc(100% - 40px);
    position: relative;
    display: grid;
    align-items: center;
    grid-template-columns: 20px 1fr;
    grid-gap: 5px;
    box-sizing: border-box;
    border-radius: 45px;
    overflow: hidden;
    ${theme.media.smallDesktopUp} {
      margin: 0 auto 20px auto;
    }
  }

  input {
    &:focus {
      &::placeholder {
        opacity: 0;
        transform: translateX(-100px);
      }

      & {
        border: none;
        outline: none;
      }
    }

    &::placeholder {
      transition: all 600ms cubic-bezier(0.19, 1, 0.22, 1);
      color: #707070;
    }

    & {
      padding-right: 25px;
      color: #707070;
      font-size: 13px;
      border: none;
      background: transparent;
    }
  }
`;

export const Button = styled.span`
  & {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    /*
    padding: 5px;
    */
  }

  svg {
    & {
      width: 100%;
    }

    path {
      transition: .25s ease-in-out;
      fill: none;
      stroke: black;
      stroke-width: 40;
    }
  }
`;

export const Clear = styled.span`
  & {
    /*
    padding: 10px;
    */
    cursor: pointer;
    right: -2px;
    position: absolute;
    width: 15px;
    transition: .35s;
    transform-origin: center;
    box-sizing: border-box;
  }
`;
