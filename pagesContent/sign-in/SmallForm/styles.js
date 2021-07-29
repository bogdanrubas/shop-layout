import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
  ${theme.media.smallDesktopUp} {
    display: none;
  }
`;
