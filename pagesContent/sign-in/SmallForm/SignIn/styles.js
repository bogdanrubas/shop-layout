import styled from 'styled-components';
import { theme } from 'config/theme';

export const SignInWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  transition: .65s ${theme.cubicBezier};
  ${({ shouldShow }) => shouldShow ? `
    transform: translateX(0vh)
  ` : `
    transform: translateX(-100vw)
  `}
`;

export const Container = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  margin: 30px 0 0 0;
  box-sizing: border-box;
  box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, .1);
  margin: 30px auto 0 auto;
  ${theme.media.tabletPortraitUp} {
    width: 350px;
  }
  ${theme.media.phone} {
    width: calc(100% - 40px);
  }
`;

export const Title = styled.p`
  ${({ toggleAnimation }) => theme.animation({
    name: 'fade',
    toggle: toggleAnimation,
    delay: toggleAnimation ? 650 : 0,
    value: {
      x: 0,
      y: "20px"
    }
  })};
  margin: 0 0 20px 0;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
`;

export const ButtonAnimation = styled.div`
  ${({ toggleAnimation }) => theme.animation({
    name: 'fade',
    toggle: toggleAnimation,
    delay: toggleAnimation ? 740 : 0,
    value: {
      x: 0,
      y: "20px"
    }
  })};
  margin: 20px 0 20px 0;
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