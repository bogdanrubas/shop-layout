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
  ${({ toggleAnimation }) =>
    theme.animation({
      name: 'fade',
      toggle: toggleAnimation,
      delay: toggleAnimation ? 650 : 0,
      value: {
        x: 0,
        y: '20px',
      },
    })};
  margin: 0 0 30px 0;
  font-size: 22px;
  font-weight: bold;
`;

export const InputAnimation = styled.div`
  ${({ toggleAnimation, delay }) =>
    theme.animation({
      name: 'fade',
      toggle: toggleAnimation,
      delay,
      value: {
        x: 0,
        y: '20px',
      },
    })};
`;

export const ButtonAnimation = styled.div`
  ${({ toggleAnimation }) =>
    theme.animation({
      name: 'fade',
      toggle: toggleAnimation,
      delay: toggleAnimation ? 740 : 0,
      value: {
        x: 0,
        y: '20px',
      },
    })};
  margin: 20px 0 30px 0;
`;

export const SmallAnimation = styled.div`
  ${({ toggleAnimation, delay }) =>
    theme.animation({
      name: 'fade',
      toggle: toggleAnimation,
      delay,
      value: {
        x: 0,
        y: '20px',
      },
    })};
`;

export const Small = styled(SmallAnimation)`
  & {
    font-size: 12px;
    color: #707070;
    display: block;
  }

  b {
    margin-left: 3px;
    color: black;
    cursor: pointer;
  }
`;
