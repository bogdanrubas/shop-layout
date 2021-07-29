import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  ${theme.media.smallDesktopUp} {
    ${theme.appear({
      name: 'fade',
      delay: 350,
      value: {
        x: -50,
        y: 0
      }
    })};
  }
  ${theme.media.tabletLandscapeDown} {
    ${theme.appear({
      name: 'fade',
      delay: 350,
      value: {
        x: 0,
        y: 50
      }
    })};
  }
  grid-area: info;
  position: relative;
  @media (min-width: 1200px) {
    margin-left: -10vw;
    display: flex;
    align-items: center;
  }
  ${theme.media.tabletLandscapeDown} {
    overflow: hidden;
  }
`;

export const Container = styled.div`
  position: absolute;
  pointer-events: ${props => props.actualSlide ? "all" : "none"};
  box-sizing: border-box;
  @media (max-width: 1199px) {
    top: 0;
  }
  ${theme.media.tabletPortraitUp} {
    width: 100%;
    padding: 0 50px;
  }
  ${theme.media.phone} {
    width: 100%;
    text-align: justify;
    padding: 0px 20px;
  }
`;

export const Title = styled.p`
  transition: transform 450ms ${({ theme }) => theme.cubicBezier} ${props => props.delay}ms, opacity 450ms ${({ theme }) => theme.cubicBezier} ${props => props.delay}ms;
  display: block;
  font-weight: bold;
  margin: 0;
  @media (min-width: 700px) {
    font-size: 50px;
  }
  @media (max-width: 699px) {
    font-size: 40px;
  }
  @media (max-width: 599px) {
    font-size: 30px;
  }
  @media (max-width: 499px) {
    font-size: 25px;
  }
`;

export const Description = styled.p`
  transition: transform 450ms ${({ theme }) => theme.cubicBezier} ${props => props.delay}ms, opacity 450ms ${({ theme }) => theme.cubicBezier} ${props => props.delay}ms;
  display: block;
  @media (min-width: 500px) {
    width: 75%;
  }
`;

export const Button = styled.button`
  &:focus {
    outline: none;
  }

  & {
    background: transparent;
    border: none;
    display: block;
    cursor: pointer;
    font-size: 12px;
    margin: 10px 0 0 0;
    font-weight: bold;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: 0px;
  }
`;

export const Price = styled.p`
  & {
    transition: transform 450ms ${({ theme }) => theme.cubicBezier} ${props => props.delay}ms, opacity 450ms ${({ theme }) => theme.cubicBezier} ${props => props.delay}ms;
    margin: 0;
    display: block;
    font-weight: bold;
    font-size: 40px;
  }

  small {
    font-size: 20px;
    font-weight: normal;
    margin: 0 0 0 5px;
  }
`;
