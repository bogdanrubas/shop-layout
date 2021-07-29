import styled from 'styled-components';
import posed from 'react-pose';
import { theme } from 'config/theme';

export const Wrapper = styled.div``;

const ScrollAnimation = posed.div({
  actual: {
    transform: `translateX(0%)`,
    opacity: 1,
    transition: {
      ease: theme.cubicBezierPose,
      duration: 720,
    },
  },
  previous: {
    transform: `translateX(-150%)`,
    opacity: 0,
    transition: {
      ease: theme.cubicBezierPose,
      duration: 720,
    },
  },
  next: {
    transform: `translateX(150%)`,
    opacity: 0,
    transition: {
      ease: theme.cubicBezierPose,
      duration: 720,
    },
  },
});

export const Scroll = styled(ScrollAnimation)`
  height: calc(100% - 250px);
  box-sizing: border-box;
  margin: 70px 0 0 0;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
`;

export const Container = styled.div`
  position: absolute;
  padding: 0 0 20px 0;
  ${theme.media.tabletPortraitUp} {
    left: 40px;
    right: 40px;
  }
  ${theme.media.phone} {
    left: 20px;
    right: 20px;
  }
`;

export const Title = styled.h1`
  ${theme.media.smallDesktopUp} {
    ${theme.appear({
        name: 'fade',
        delay: 150,
        value: {
          x: 0,
          y: 20,
        },
      })};
  }
  font-size: ${theme.font.big};
  color: ${theme.colors.text.accent};
  letter-spacing: 1px;
  margin: 0;
  text-align: center;
`;

export const Description = styled.p`
  ${theme.media.smallDesktopUp} {
    ${theme.appear({
        name: 'fade',
        delay: 250,
        value: {
          x: 0,
          y: 20,
        },
      })};
  }
  margin: 5px 0 30px 0;
  text-align: center;
`;

export const Grid = styled.div`
  ${theme.media.smallDesktopUp} {
    ${theme.appear({
        name: 'fade',
        delay: 350,
        value: {
          x: 0,
          y: 20,
        },
      })};
  }
  display: grid;
  margin: 0 0 30px 0;
  grid-gap: 0px 15px;
  ${theme.media.tabletPortraitUp} {
    grid-template-areas: ${({ gridAreaTemplates }) =>
      gridAreaTemplates[0].gridAreaTemplates};
    grid-template-columns: 1fr 1fr;
  }
  ${theme.media.phone} {
    grid-template-areas: ${({ gridAreaTemplates }) =>
      gridAreaTemplates[1].gridAreaTemplates};
    grid-template-columns: 1fr;
  }
`;

export const PaymentMethods = styled.div`
  margin: 0 0 30px 0;
  grid-gap: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  ${props =>
    props.paymentMethod !== undefined
      ? `
    padding: 0 0 30px 0;
    border-bottom: 1px solid #eee;
  `
      : `

  `}
`;

export const Method = styled.div`
  &:hover {
    & {
      transform: scale(1.03);
      box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, 0.15);
    }
  }

  &:last-of-type {
    margin: 0;
  }

  & {
    ${({ chosen }) =>
      chosen
        ? `
      transform: scale(1.03);
      box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, .15)
    `
        : `
      transform: scale(1);
      box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, .1);
    `};
    height: 85px;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.35s;
    padding: 10px;
  }

  svg {
    transition: 0.35s;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    display: block;
    background: #eee;
    border-radius: 50%;
    ${({ chosen }) =>
      chosen
        ? `
      background: ${theme.colors.text.accent}
    `
        : `
      background: #eee
    `};
  }

  p {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
  }
`;
