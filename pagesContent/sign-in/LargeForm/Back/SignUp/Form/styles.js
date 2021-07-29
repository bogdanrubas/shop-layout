import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  padding: 40px;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.p`
  ${({ toggleAnimation }) => theme.animation({
    name: 'fade',
    toggle: toggleAnimation,
    delay: toggleAnimation ? 620 : 0,
    value: {
      x: 0,
      y: "20px"
    }
  })};
  margin: 0 0 25px 0;
  font-size: 22px;
  font-weight: bold;
`;

export const InputsContainer = styled.div`
  ${({ toggleAnimation }) => toggleAnimation ? `
    opacity: 1;
    transition:
      transform .65s ${theme.cubicBezier},
      opacity .45s .65s;
  ` : `
    opacity: 0;
    transition:
      transform .65s ${theme.cubicBezier},
      opacity .25s;
  `};
  position: absolute;
  width: calc(100% - 80px);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0px 15px;
  grid-template-areas: ${props => props.gridAreaTemplates};
`;

export const ButtonsContainer = styled.div`
  width: calc(100% - 80px);
  position: absolute;
  bottom: 30px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    'previous previous . . next next';
`;

export const ButtonAnimation = styled.div`
  ${({ toggleAnimation, delay }) => theme.animation({
    name: 'fade',
    toggle: toggleAnimation,
    delay: delay,
    value: {
      x: 0,
      y: "-10px"
    }
  })};
  grid-area: ${({ gridArea }) => gridArea};
`;