import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  ${theme.media.smallDesktop} {
    grid-area: image;
  }
  ${theme.media.bigDesktop} {
    grid-area: image;
  }
`;

export const BigImage = styled.div`
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    z-index: 1;
    box-shadow: inset 0px 0px 220px -20px rgba(0, 0, 0, 0.76);
  }

  & {
    ${theme.media.tabletLandscapeDown} {
      ${
        theme.appear({
          name: 'fade',
          delay: 50,
          value: {
            x: 0,
            y: -20,
          },
        })};
    }
    ${theme.media.smallDesktopUp} {
      ${
        theme.appear({
          name: 'fade',
          delay: 50,
          value: {
            x: -40,
            y: 0,
          },
        })};
    }
    overflow: hidden;
    width: 100%;
    position: relative;
    display: flex;
    background: #f8f8f8;
    align-items: center;
    justify-content: center;
    ${theme.media.bigDesktop} {
      height: 100%;
    }
    ${theme.media.smallDesktop} {
      height: 100%;
    }
    ${theme.media.tabletLandscape} {
      height: 100vw;
    }
    ${theme.media.tabletPortrait} {
      height: 110vw;
    }
    ${theme.media.phone} {
      height: 110vw;
    }
  }

  img {
    transition: 0.65s ${theme.cubicBezier};
    position: absolute;
    top: 50%;
    width: 100%;
    left: 0;
    right: 0;
    z-index: 0;
  }
`;

export const Pagination = styled.div`
  & {
    width: 100%;
    box-sizing: border-box;
    display: grid;
    position: absolute;
    align-items: center;
    z-index: 2;
    padding: 8px;
    grid-template-columns: 1fr auto 1fr;
    ${theme.media.tabletLandscapeUp} {
      grid-gap: 20px;
      bottom: 10px;
    }
    ${theme.media.tabletPortraitDown} {
      bottom: 5px;
    }
  }
`;

export const Arrow = styled.div`
  &:first-of-type svg {
    ${theme.media.tabletLandscapeUp} {
      float: right;
    }
    ${theme.media.tabletPortraitDown} {
      float: left;
    }
  }

  &:last-of-type svg {
    ${theme.media.tabletLandscapeUp} {
      float: left;
    }
    ${theme.media.tabletPortraitDown} {
      float: right;
    }
  }

  & {
    cursor: pointer;
  }

  svg {
    & {
      ${theme.media.tabletLandscapeUp} {
        width: 25px;
      }
      ${theme.media.tabletPortraitDown} {
        width: 15px;
      }
    }

    path {
      stroke: rgba(255, 255, 255, 1);
      stroke-width: 60;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Circle = styled.span`
  transition: 0.35s;
  cursor: pointer;
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: 0 2px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 1);
  ${({ actual }) =>
    actual
      ? `
    background: rgba(255, 255, 255, .55);
    transform: scale(1.4);
  `
      : `
    background: rgba(255, 255, 255, .1);
    transform: scale(1);
  `};
`;

export const SmallImages = styled.div`
  &::after {
    ${theme.media.tabletPortraitDown} {
      content: '';
      display: block;
      position: absolute;
      width: calc(100% - 40px);
      margin: 0 auto;
      height: 1px;
      background: #f4f4f4;
      bottom: 0;
    }
  }

  & {
    ${theme.media.tabletLandscapeUp} {
      position: absolute;
      top: 0;
      right: 0;
      padding: 20px 20px 40px 40px;
      overflow-y: auto;
      z-index: 2;
      height: 100%;
      box-sizing: border-box;
    }
    ${theme.media.tabletLandscape} {
      padding: 30px 20px 40px 40px;
    }
    ${theme.media.tabletPortraitDown} {
      position: relative;
      padding: 20px;
      white-space: nowrap;
      overflow-x: auto;
    }
  }
`;

export const SmallImage = styled.div`
  &:last-of-type {
    margin: 0;
  }

  & {
    ${theme.media.tabletLandscapeDown} {
      ${({ index }) =>
        theme.appear({
          name: 'fade',
          delay: 150 + index * 50,
          value: {
            x: 0,
            y: 20,
          },
        })};
    }
    ${theme.media.smallDesktopUp} {
      ${({ index }) =>
        theme.appear({
          name: 'fade',
          delay: 150 + index * 50,
          value: {
            x: 20,
            y: 0,
          },
        })};
    }
    cursor: pointer;
    transition: 0.25s;
    width: 70px;
    height: 70px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    ${props =>
      props.chosen
        ? `
      transform: scale(1.1);
      box-shadow: 0px 2px 55px -1px rgba(0, 0, 0, .2);
    `
        : `
      transform: scale(1);
      box-shadow: 0px 2px 45px -6px rgba(0, 0, 0, .2);
    `};
    ${theme.media.tabletLandscapeUp} {
      margin: 0 0 20px 0;
      display: block;
    }
    ${theme.media.tabletPortraitDown} {
      margin: 0 10px 0 0;
      display: inline-block;
    }
  }

  img {
    position: absolute;
    top: 50%;
    width: 100%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
  }
`;
