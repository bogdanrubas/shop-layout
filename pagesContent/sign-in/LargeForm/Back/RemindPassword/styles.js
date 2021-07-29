import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  pointer-events: ${props => (props.shouldShow ? 'all' : 'none')};
`;

export const Title = styled.p`
  ${({  toggleAnimation }) =>
    theme.animation({
      name: 'fade',
      toggle: toggleAnimation,
      delay: toggleAnimation ? 650 : 0,
      value: {
        x: 0,
        y: '20px',
      },
    })};
  margin: 0 0 20px 0;
  font-size: 22px;
  font-weight: bold;
`;

export const Description = styled.p`
  ${({  toggleAnimation }) =>
    theme.animation({
      name: 'fade',
      toggle: toggleAnimation,
      delay: toggleAnimation ? 680 : 0,
      value: {
        x: 0,
        y: '20px',
      },
    })};
  margin: 0 0 25px 0;
`;

export const InputAnimation = styled.div`
  ${({  toggleAnimation }) =>
    theme.animation({
      name: 'fade',
      toggle: toggleAnimation,
      delay: toggleAnimation ? 710 : 0,
      value: {
        x: 0,
        y: '20px',
      },
    })};
`;

export const ButtonAnimation = styled.div`
  ${({  toggleAnimation }) =>
    theme.animation({
      name: 'fade',
      toggle: toggleAnimation,
      delay: toggleAnimation ? 740 : 0,
      value: {
        x: 0,
        y: '20px',
      },
    })};
`;
