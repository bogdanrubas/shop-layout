import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  width: 100%;
  ${({  toggleAnimation }) =>
    theme.animation({
      name: 'fade',
      toggle: toggleAnimation,
      delay: 650,
      value: {
        x: 0,
        y: '20px',
      },
    })};
`;

export const Icon = styled.div``;
export const Title = styled.p``;
export const Description = styled.p``;
export const Container = styled.div`
  & {
    position: absolute;
  }

  ${Icon} {
    width: 70px;
    height: 70px;
    display: block;
    margin: 40px auto 0 auto;
    background: #eee;
    border-radius: 50%;
    pointer-events: none;
    ${({ actual }) =>
      actual
        ? `
      opacity: 1;
      transition: .45s .25s;
    `
        : `
      opacity: 0;
      transition: .45s;
    `}
  }

  ${Title} {
    display: block;
    margin: 20px 0 0 0;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    pointer-events: none;
    ${({ actual }) =>
      actual
        ? `
            opacity: 1;
            transition: .45s .25s;
          `
        : `
            opacity: 0;
            transition: .45s;
          `}
  }

  ${Description} {
    display: block;
    margin: 10px 0 0 0;
    text-align: center;
    font-size: 14px;
    pointer-events: none;
    ${({ actual }) =>
      actual
        ? `
            opacity: 1;
            transition: .45s .25s;
          `
        : `
            opacity: 0;
            transition: .45s;
          `}
  }
`;
