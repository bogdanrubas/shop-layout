import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  background: white;
  min-height: 100vh;
  ${theme.media.tabletPortraitUp} {
    padding: 65px 0 0 0;
    grid-template-rows: calc(100vh - 65px) auto auto;
  }
  ${theme.media.phone} {
    padding: 50px 0 0 0;
    grid-template-rows: calc(100vh - 50px) auto auto;
  }
  ${theme.media.smallDesktopUp} {
    display: grid;
    grid-template-columns: 50vw 1fr;
    grid-template-areas:
      "image info"
      ". info"
      "similar-products similar-products"
  }
`;
