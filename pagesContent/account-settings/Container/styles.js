import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`

`;

export const Title = styled.h1`
  font-size: 12px;
  margin: 30px 0 20px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Inputs = styled.div`
  & {
    ${theme.media.tabletLandscape} {
      display: grid;
      grid-gap: 15px;
      grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns.tabletLandscape};
      grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas.tabletLandscape};
    }

    ${theme.media.smallDesktopUp} {
      display: grid;
      grid-gap: 15px;
      grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns.smallDesktopUp};
      grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas.smallDesktopUp};
    }
  }

  div {
    ${theme.media.tabletLandscapeUp} {
      margin: 0;
    }
  }
`;
