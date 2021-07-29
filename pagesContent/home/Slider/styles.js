import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  display: grid;
  overflow: hidden;
	${theme.media.smallDesktopUp} {
    min-height: calc(100vh - 65px);
    grid-template-columns: 20vw 40vw 40vw;
    grid-template-areas: "pagination image info";
	}
	${theme.media.tabletLandscapeDown} {
    grid-template-rows: auto ${props => props.maxInfoContainerHeight};
    grid-template-columns: 50px 50vw calc(50vw - 50px);
    grid-template-areas:
      "pagination image image"
      "pagination info info";
	}
`;
