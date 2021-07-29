import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  ${theme.media.tabletLandscapeUp} {
    padding: 50px 60px 40px 60px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${theme.media.smallDesktopUp} {
    grid-gap: 60px;
  }
  ${theme.media.tabletLandscape} {
    grid-gap: 40px;
  }
  ${theme.media.tabletPortraitDown} {
    box-sizing: border-box;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }
  ${theme.media.tabletPortrait} {
    padding: 50px 40px 40px 40px;
  }
  ${theme.media.phone} {
    padding: 20px 20px 20px 20px;
  }
`;
