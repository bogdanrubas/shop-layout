import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  ${theme.media.smallDesktopUp} {
    display: flex;
    margin: 70px 0 0 0;
    min-height: calc(100vh - 70px);
    align-items: center;
    justify-content: center;
  }

  ${theme.media.tabletLandscape} {
    padding: 95px 0 0 0;
  }

  ${theme.media.tabletPortrait} {
    padding: 95px 0 0 0;
  }

  ${theme.media.phone} {
    padding: 80px 0 0 0;
  }
`;
