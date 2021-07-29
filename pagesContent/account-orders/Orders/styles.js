import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  & {
    padding: 20px;
    ${theme.media.tabletLandscapeUp} {
      width: 730px;
      margin: 0 auto;
    }
  }

  p {
    text-align: center;
    margin-bottom: 30px;
  }
`;