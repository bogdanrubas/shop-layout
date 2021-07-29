import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  ${theme.media.tabletPortraitUp} {
    padding: 65px 0 0 0;
  }

  ${theme.media.phone} {
    padding: 50px 0 0 0;
  }
`;
