import styled from 'styled-components';
import { theme } from 'config/theme';

export const SignUpWrapper = styled.div`
  transition: 0.65s ${theme.cubicBezier};
  padding-bottom: 20px;
  ${({ shouldShow }) =>
    shouldShow
      ? `
    transform: translateX(0vh)
  `
      : `
    transform: translateX(100vw)
  `}
`;

export const Container = styled.div`
  height: calc(100vh - 150px);
  position: relative;
  overflow: hidden;
  background: white;
  margin: 30px auto 0 auto;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 20px 0;
  box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, 0.1);
  ${theme.media.phone} {
    width: calc(100% - 40px);
  }
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
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin: 0;
`;

export const Small = styled.div`
  & {
    text-align: center;
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
