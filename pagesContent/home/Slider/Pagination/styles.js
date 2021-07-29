import styled from 'styled-components';
import { theme } from 'config/theme';

export const Time = styled.div`
  &::before {
    content: "";
    height: 0;
    background-color: white;
    display: block;
    position: absolute;
    bottom: 0;
    width: 1px;
    transition: ${props => props.startTimeAnimation ? props.autoSlidingTime + "ms linear" : "0ms linear"};
    height: ${props => props.startTimeAnimation ? "100%" : "0%"}
  }

  & {
    width: 1px;
    margin: 0 auto;
    position: relative;
    background: rgba(255, 255, 255, .35);
  }
`;

export const Wrapper = styled.div`
  background: linear-gradient(to bottom, black, #f8f8f8);
  background-position: 0px -100%;
  background-size: 100% 200%;
  grid-area: pagination;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Container = styled.div`
	${theme.media.smallDesktopUp} {
		${theme.appear({
      name: 'fade',
      delay: 350,
      value: {
        x: 50,
        y: 0
      }
    })};
    margin-left: -10vw;
	}
  ${theme.media.tabletLandscapeDown} {
    ${theme.appear({
      name: 'fade',
      delay: 250,
      value: {
        x: 30,
        y: 0
      }
    })};
  }
  width: 30px;
  display: grid;
  justify-content: center;
  grid-template-rows: 20px 20px 150px 20px 20px;
  grid-gap: 10px;
`;

export const Button = styled.div`
  &:hover svg {
    transform: scale(1.2);
  }

  & {
    cursor: pointer;
    display: flex;
    justify-content: center;
  }

  svg {
    & {
      transition: .15s ease-in-out;
      width: 20px;
      height: 20px;
    }

    path {
      stroke: rgba(255, 255, 255, 1);
      stroke-width: 50;
    }
  }
`;

export const SlideNumber = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  font-size: 20px;
`;