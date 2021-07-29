import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  padding: 12px 0 25px 0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
`;

export const LeftColumn = styled.div`
  color: ${theme.colors.text.accent};
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RightColumn = styled.div`
  text-align: right;
  position: relative;
`;

export const BigText = styled.b`
  color: ${theme.colors.text.accent};
  font-size: 16px;
  white-space: nowrap;
`;
export const SmallText = styled.b`
  margin: 0;
  padding: 3px 0 0 0;
  font-size: 12px;
  display: block;
  color: ${theme.colors.text.normal};
`;

export const AvailableColors = styled.div`
  & {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 8px 0 0 0;
    font-size: 13px;
  }

  span {
    &:nth-child(1) {
      ${'' /* &::before {
        box-shadow: 0px 5px 25px .5px ${props => props.firstColor};
        opacity: .65;
      } */}

      & {
        background-color: ${props => props.firstColor};
      }
    }

    &:nth-child(2) {
      ${'' /* &::before {
        box-shadow: 0px 5px 25px .5px ${props => props.secondColor};
        opacity: .65;
      } */}

      & {
        background-color: ${props => props.secondColor};
      }
    }

    &:nth-child(3) {
      ${'' /* &::before {
        box-shadow: 0px 5px 25px .5px ${props => props.thirdColor};
        opacity: .65;
      } */}

      & {
        background-color: ${props => props.thirdColor};
        margin: 0 4px 0 2px;
      }
    }

    &::before {
      content: "";
      display: block;
      z-index: -1;
      position: absolute;
      width: 8px;
      border-radius: 50%;
      height: 8px;
    }

    & {
      border-radius: 50%;
      transition: .35s;
      width: 8px;
      height: 8px;
      display: inline-block;
      margin: 0 2px;
    }
  }

  small {
    line-height: 0;
    transform: translateY(-0.5px);
  }
`;


export const MoreColors = styled.div`
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: -5px;
    right: 9px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
  }

  & {
    pointer-events: none;
    opacity: 0;
    transition: .25s ease-in-out;
    padding: 5px 5px 1px 5px;
    box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, .1);
    background: white;
    border-radius: 8px;
    top: 40px;
    right: -5px;
    position: absolute;
    z-index: 2;
  }
`;

export const MoreColorsWrapper = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
`;

export const MoreColorsImage = styled.div`
  &:last-of-type {
    border: none;
    margin: 0 0 0 0;
  }

  & {
    overflow: hidden;
    cursor: pointer;
    border-radius: 4px;
    display: inline-block;
    width: 60px;
    height: 60px;
    margin: 0 5px 0 0;
    position: relative;
  }

  img {
    position: absolute;
    transition: .25s ease-in-out;
    transition-delay: ${ props => props.animationDelay * .05 + .1 }s;
    opacity: 0;
    top: 50%;
    width: 100%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
  }
`;
