import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  & {
    grid-area: logo;
    padding: 10px 0;
    cursor: pointer;
    ${theme.media.smallDesktopUp} {
      margin: 0 0 0 10px;
    }
    ${theme.media.tabletPortraitUp} {
      height: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    ${theme.media.phone} {
      height: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  svg {
    & {
      height: 30px;
    }

    path {
      fill: black;
      stroke-width: 0;
    }
  }

  p {
    & {
      margin: 3px 0 0 0;
      text-transform: uppercase;
      font-size: 9px;
      color: ${theme.colors.text.normal};
    }

    b {
      color: ${theme.colors.text.accent};
    }
  }
`;
