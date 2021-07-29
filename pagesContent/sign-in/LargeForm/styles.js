import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  ${theme.appear({
    name: 'scale',
    delay: 50,
    value: 0
  })};
  ${theme.media.tabletLandscapeDown} {
    display: none;
  }
  transition: .55s ${theme.cubicBezier};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
  perspective: 1400px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;
