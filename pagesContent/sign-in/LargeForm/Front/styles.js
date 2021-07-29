import styled from 'styled-components';
import { theme } from 'config/theme';
const firstAccentColor = 'rgba(238, 9, 121, 1)';
const secondAccentColor = 'rgba(255, 106, 0, 1)';
const buttonShadow = '0px 5px 45px -8px rgba(219, 72, 91, .85)';
const buttonShadowHover = '0px 5px 45px -5px rgba(219, 72, 91, .9)';

const getIconTransform = (show, hide) => {
  if (hide === true) {
    return 'translateY(30px) translateX(-40px) scale(0.3)';
  }

  if (show === true) {
    return 'translateY(-80px) translateX(-40px) scale(0.3)';
  }
};

const getIconMargin = (show, hide) => {
  if (hide === false && show === false) {
    return '40px 0 0 40px';
  }

  return '40px 0 0 0';
};

const getTitleTransform = (show, hide) => {
  if (hide === true) {
    return 'translateY(-100px) scale(0)';
  }

  if (show === true) {
    return 'translateY(-240px) translateX(-50px)';
  }
};

const getTitleTransition = (show, hide) => {
  if (show === true) {
    return '.3s .15s';
  }

  return '.35s';
};

const getListElementTransition = (show, delay) => {
  if (show === true) {
    return `.25s ${(delay + 1) * 0.05 + 0.25}s`;
  }

  return '.15s';
};

// ////////////////////////////////////////////////////

export const Wrapper = styled.div`
  transition: 0.55s ease-in-out;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: ${props => (props.shouldFlip ? 'none' : 'all')};
  transform: ${props =>
    props.shouldFlip ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  background: white;
  box-shadow: 0px 5px 60px -5px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;

export const Icon = styled.div``;
export const Button = styled.div``;
export const Column = styled.div`
  & {
    transition: box-shadow 0.35s ease-in-out, flex-basis 0.35s ease-in-out,
      opacity 0.35s 0.5s;
    box-shadow: ${props =>
      props.shouldShow ? '0px 0px 40px -5px rgba(0, 0, 0, .085)' : ''};
    flex-basis: ${props => props.flexBasis};
    opacity: ${props => (props.shouldFlip ? 0 : 1)};
    pointer-events: ${props => (props.shouldFlip ? 'none' : 'all')};
    bottom: 0;
    top: 0;
    position: relative;
  }

  h1,
  h2 {
    transition: ${props =>
      getTitleTransition(props.shouldShow, props.shouldHide)};
    left: 0;
    right: 0;
    top: 280px;
    position: absolute;
    white-space: nowrap;
    text-align: center;
    transform: ${props =>
      getTitleTransform(props.shouldShow, props.shouldHide)};
    opacity: ${props => (props.shouldHide ? 0 : 1)};
    font-size: 20px;
  }

  ul {
    height: 125px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 320px;
    position: absolute;
    padding: 0;
    margin: 130px 0 0 40px;
    list-style: none;
  }

  ${Icon} {
    transition: 0.35s ease-in-out;
    width: 220px;
    height: 220px;
    position: absolute;
    transform: ${props => getIconTransform(props.shouldShow, props.shouldHide)};
    margin: ${props => getIconMargin(props.shouldShow, props.shouldHide)};
    border-radius: 50%;
    background: #eee;
  }

  ${Button} {
    &:hover {
      background-position: 80%;
      box-shadow: ${buttonShadowHover};
    }

    & {
      transition: ${props =>
        props.shouldShow
          ? 'transform .15s .25s, opacity .15s .25s, background .25s, box-shadow .25s, margin .15s'
          : 'transform .15s, opacity .15s'};
      cursor: pointer;
      top: 300px;
      left: 40px;
      border-radius: 8px;
      font-weight: bold;
      width: 150px;
      background: linear-gradient(
        to top left,
        ${firstAccentColor},
        ${secondAccentColor}
      );
      box-shadow: ${buttonShadow};
      background-size: 200% 100%;
      color: white;
      text-align: center;
      padding: 10px 0px;
      box-sizing: border-box;
      transform: ${props =>
        props.shouldShow ? 'translateY(0px)' : 'translateY(40px)'};
      opacity: ${props => (props.shouldShow ? '1' : '0')};
      pointer-events: ${props => (props.shouldShow ? 'all' : 'none')};
    }
  }
`;

export const ListElement = styled.li`
  &::before {
    content: '';
    display: block;
    position: absolute;
    transform: translateX(-12px) translateY(2px);
    width: 1px;
    height: 15px;
    background: #dadada;
  }

  & {
    transition: ${props =>
      getListElementTransition(props.shouldShow, props.transitionDelay)};
    opacity: ${props => (props.shouldShow ? 1 : 0)};
    transform: ${props =>
      props.shouldShow ? 'translateX(0px)' : 'translateX(-30px)'};
    font-size: 15px;
    margin: 0 0 10px 12px;
  }
`;

export const ButtonAnimation = styled.div`
  ${({ toggleAnimation }) =>
    theme.animation({
      name: 'fade',
      toggle: toggleAnimation,
      delay: 100,
      value: {
        x: 0,
        y: '80px',
      },
    })};
  position: absolute;
  bottom: 40px;
  left: 40px;
  width: 150px;
`;
