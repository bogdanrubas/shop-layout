import styled from 'styled-components';
import { theme } from 'config/theme';

export const Background = styled.div `
  transition: transform .5s ${theme.cubicBezier};;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background: url('${props => props.background}') no-repeat center;
  background-size: cover;
`;


export const Wrapper = styled.div `
  &:hover {
    &::before {
      opacity: 0;
    }

    & {
      transform: scale(1.05);
    }

    ${Background} {
      transform: scale(1.2);
    }
  }

  &::before {
    content: "";
    transition: .45s ${theme.cubicBezier};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);

  }

  &:last-of-type {
    margin: 0;
  }

  & {
    cursor: pointer;
    transition: .45s ${theme.cubicBezier};
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    overflow: hidden;
    ${theme.media.tabletLandscapeUp} {
      height: 250px;
    }
    ${theme.media.tabletPortraitDown} {
      height: 350px;
      width: 200px;
      display: inline-block;
      margin-right: 40px;
    }
  }
`;

export const Text = styled.p `
  color: white;
  margin: auto 20px;
  position: relative;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: normal;
  ${theme.media.smallDesktopUp} {
    font-size: 30px;
  }
  ${theme.media.tabletLandscapeDown} {
    font-size: 22px;
    transform: translateY(150px)
  }
`;