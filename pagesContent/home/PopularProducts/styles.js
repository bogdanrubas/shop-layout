import styled from 'styled-components';
import { ProductWrapper } from 'layout/Product/styles';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Title = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  ${theme.media.tabletLandscapeUp} {
    margin: 90px 0 0 60px;
  }
  ${theme.media.tabletPortrait} {
    margin: 60px 0 0 40px;
  }
  ${theme.media.phone} {
    margin: 40px 0 0 20px;
  }
`;

export const LeftArrow = styled.div`
  & {
    transition: .35s ${theme.cubicBezier} .05s;
    position: absolute;
    left: 10px;
    z-index: 5;
    cursor: pointer;
    background: white;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, .4);
    transform: ${({ show }) => show ?  "translateX(0px)" : "translateX(-50px)"};
    ${theme.media.smallDesktopUp} {
      top: 260px;
    }
    ${theme.media.tabletLandscapeDown} {
      display: none;
    }
  }

  svg {
    & {
      width: 20px;
    }

    path {
      fill: none;
      stroke: black;
      stroke-width: 40;
    }
  }
`;

export const RightArrow = styled.div`
  & {
    transition: .35s ${theme.cubicBezier} .05s;
    position: absolute;
    right: 10px;
    z-index: 5;
    cursor: pointer;
    background: white;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, .4);
    transform: ${({ show }) => show ? "translateX(0px)" : "translateX(50px)"};
    ${theme.media.smallDesktopUp} {
      top: 260px;
    }
    ${theme.media.tabletLandscapeDown} {
      display: none;
    }
  }

  svg {
    & {
      width: 20px;
    }

    path {
      fill: none;
      stroke: black;
      stroke-width: 40;
    }
  }
`;

export const ProductsContainer = styled.div`
  & {
    white-space: nowrap;
    overflow: auto;
    height: 430px;
    ${theme.media.tabletLandscapeUp} {
      padding: 30px 60px;
    }
    ${theme.media.tabletPortrait} {
      padding: 30px 40px;
    }
    ${theme.media.phone} {
      padding: 30px 20px;
    }
  }

  ${ProductWrapper} {
    &:last-of-type {
      margin: 0;
    }

    & {
      width: 220px;
      margin: 0 40px 0 0;
      display: inline-block;
    }
  }
`;
