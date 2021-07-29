import styled from 'styled-components';
import posed from 'react-pose';
import { theme } from '../../config/theme';

const FilterWrapperAnimation = posed.div({
  open: {
    height: "100vh",
    transition: (({ delay }) => ({
      delay: delay,
      ease: theme.cubicBezierPose,
      duration: 950
    }))
  },
  close: {
    height: "130px",
    transition: (({ delay }) => ({
      delay: delay,
      ease: theme.cubicBezierPose,
      duration: 550
    }))
  }
});

export const FilterWrapper = styled(FilterWrapperAnimation)`
  background: #fefefe;
  position: fixed;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  z-index: 5;
  box-sizing: border-box;
  box-shadow: 0px 5px 55px -10px rgba(0, 0, 0, .075);
  ${theme.media.smallDesktopUp} {
    width: 300px;
    padding: 40px 0;
    height: calc(100vh - 65px);
  }
  ${theme.media.tabletLandscapeDown} {
    width: 100%;
  }
  ${theme.media.tabletLandscape} {
    padding: 40px;
  }
  ${theme.media.tabletPortrait} {
    padding: 40px;
  }
  ${theme.media.tabletPortraitUp} {
    top: 65px;
  }
  ${theme.media.phone} {
    top: 50px;
    padding: 20px;
  }
`;

export const Title = styled.div`
  & {
    ${({ appear }) => appear !== undefined ? theme.appear(appear) : ""};
    ${({ animation }) => animation !== undefined ? theme.animation(animation) : ""};
    ${theme.media.tabletLandscapeDown} {
      margin: 0 0 20px 0;
    }
  }

  h1 {
    letter-spacing: 1px;
    font-size: ${theme.font.big};
    color: ${theme.colors.text.accent};
    margin: 0;
  }

  small {
    color: ${theme.colors.text.normal};
    font-size: ${theme.font.small};
  }
`;

export const ToggleFilter = styled.div`
  & {
    ${({ appear }) => appear !== undefined ? theme.appear(appear) : ""};
    ${({ animation }) => animation !== undefined ? theme.animation(animation) : ""};
    width: 25px;
    margin-top: -28px;
    position: absolute;
    z-index: 3;
    ${theme.media.tabletPortraitUp} {
      right: 40px;
    }
    ${theme.media.phone} {
      right: 20px;
    }
  }

  svg {
    & {
      transition: .35s;
      position: absolute;
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

export const SortingMobile = styled.div`
  ${({ animation }) => animation !== undefined ? theme.animation(animation) : ""};
  padding: 0 20px 15px 20px;
  box-sizing: border-box;
`;

export const MobileFilterTypesWrapper = styled.div`
  ${({ animation }) => animation !== undefined ? theme.animation(animation) : ""};
  width: 100%;
  box-sizing: border-box;
  left: 0;
  padding: 0 0 20px 0;
  top: 0;
  ${({ shouldShow }) => shouldShow ? `
    pointer-events: all;
    overflow-y: auto;
  ` : `
    pointer-events: none;
    overflow-y: hidden;
  `}
  ${theme.media.phone} {
    width: 100%;
    height: calc(100% - 50px);
    position: absolute;
    z-index: 1;
  }
  ${theme.media.tabletPortrait} {
    width: 300px;
    height: 100vh;
    position: fixed;
    z-index: 10;
    background: white;
    box-shadow: 5px 0 40px -10px rgba(0, 0, 0, .075);
  }
  ${theme.media.tabletLandscapeUp} {
    width: 400px;
    height: 100vh;
    position: fixed;
    z-index: 10;
    background: white;
    box-shadow: 5px 0 40px -10px rgba(0, 0, 0, .075);
  }
`;

export const DesktopHeader = styled.div`
  top: 65px;
  position: fixed;
  z-index: 4;
  background: #f8f8f8;
  padding: 40px 40px 20px 340px;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 200px;
`;
