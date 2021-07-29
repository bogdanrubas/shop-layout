import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  ${theme.appear({
      name: 'fade',
      delay: 150,
      value: {
        x: 0,
        y: 50,
      },
    })};
  grid-area: image;
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  & {
    box-shadow: 0px 10px 60px -10px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    z-index: 2;
    background: #f6f6f6;
    position: relative;
    ${theme.media.smallDesktopUp} {
      transform: translateX(-10vw);
      width: 40vw;
      height: 40vw;
    }
    ${theme.media.tabletLandscape} {
      width: calc(100% - 100px);
      height: 50vw;
      margin: 50px;
    }
    ${theme.media.tabletPortrait} {
      width: 100%;
      height: 75vw;
      margin: 0 0 50px 0;
    }
    ${theme.media.phone} {
      width: 100%;
      height: 75vw;
      margin: 0 0 20px 0;
    }
  }

  img {
    transition: 650ms ${theme.cubicBezier};
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute;
  }
`;
