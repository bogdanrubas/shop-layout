import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  ${theme.media.smallDesktopUp} {
    display: grid;
    grid-template-columns: 1fr 450px;
    grid-gap: 20px;
  }
  ${theme.media.smallDesktopUp} {
    padding: 110px 0 40px 0;
  }
  ${theme.media.tabletLandscape} {
    padding: 120px 0 40px 0;
  }
  ${theme.media.tabletPortrait} {
    padding: 100px 0 40px 0;
  }
  ${theme.media.phone} {
    padding: 80px 0 20px 0;
  }
`;
