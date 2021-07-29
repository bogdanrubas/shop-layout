import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  background: white;
  position: relative;
  color: ${theme.colors.normalColor};
  padding: 40px 0 0 0;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 11px;
  box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, 0.1);
  ${theme.media.smallDesktopUp} {
    margin: 0 40px 0 0;
    height: calc(100vh - 150px);
  }
  ${theme.media.tabletLandscape} {
    margin: 40px 40px 0px 40px;
    height: 700px;
  }
  ${theme.media.tabletPortrait} {
    margin: 40px 40px 0px 40px;
    height: 700px;
  }
  ${theme.media.phone} {
    margin: 40px 20px 0 20px;
    height: 650px;
  }
`;
