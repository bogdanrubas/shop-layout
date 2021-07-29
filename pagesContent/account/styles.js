import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  ${theme.media.smallDesktopUp} {
    padding: 80px 0 0 0;
  }

  ${theme.media.tabletLandscapeDown} {
    padding: 60px 0 0 0;
  }
`;
