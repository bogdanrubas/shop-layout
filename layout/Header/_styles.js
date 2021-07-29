import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  ${theme.appear({
      name: 'fade',
      delay: 0,
      value: {
        x: 0,
        y: -50,
      },
    })};
  top: 0;
  transition: 0.35s ease-in-out;
  height: ${props => props.height}px;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 9;
  align-items: center;
  background: white;
  box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, 0.075);
`;

export const Container = styled.div`
  width: 100%;
  height: 45px;
  display: grid;
  align-items: center;
  ${theme.media.smallDesktopUp} {
    grid-template-areas: 'logo links icons';
    grid-template-columns: auto auto 1fr;
  }
  ${theme.media.tabletLandscapeDown} {
    grid-template-areas: 'hamburger logo icons';
    grid-template-columns: auto auto 1fr;
  }
  ${theme.media.tabletPortraitUp} {
    height: 65px;
    grid-gap: 20px;
  }
  ${theme.media.phone} {
    height: 50px;
    grid-gap: 10px;
  }
`;
