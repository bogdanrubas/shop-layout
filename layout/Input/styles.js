import styled from 'styled-components';
import { theme } from 'config/theme';

// DefaultInput:

export const DefaultInputWrapper = styled.div`
  grid-area: ${props => props.gridArea};
  cursor: text;
  transition: box-shadow 0.25s ease-in-out;
  box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.065);
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 15px 0;
  border-radius: 5px;
  position: relative;
`;

export const InputWrap = styled.div`
  transition: 0.35s;
  overflow: hidden;
  ${({ transform }) => `
    transform: translateX(${transform}px) translateY(-1.5px);
    width: calc(100% - ${transform}px);
  `}
`;

export const InputField = styled.input`
  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    font-size: 15px;
    color: #bebebe;
    opacity: ${({ focus }) => (focus ? 1 : 0)};
    transition: 0.25s ease-in-out;
  }

  & {
    transition: 0.35s;
    width: 100%;
    padding: 11px 11px 11px 0;
    font-size: 16px;
    border: none;
    background: transparent;
  }
`;

export const Label = styled.span`
  &::before {
    ${({ theme, focus }) =>
      focus
        ? `
      opacity: 1;
      box-shadow: 0px 5px 25px -5px #666;
    `
        : `
      opacity: 0;
      box-shadow: none;
    `}
    background: linear-gradient(
      to top left,
			black,
      #666
    );
    content: '';
    transition: 0.25s ease-in-out;
    display: block;
    position: absolute;
    height: 25px;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 4px;
    z-index: -1;
  }

  &::after {
    ${({ focus, theme }) =>
      focus
        ? `
      border-top: 5px solid black;
    `
        : `
      border-top: 5px solid transparent;
    `}
    content: '';
    transition: 0.25s ease-in-out;
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    bottom: -5px;
    left: 0;
    right: 0;
    margin: auto;
  }

  & {
    ${({ theme, focus }) =>
      focus
        ? `
      color: white;
      transform: translateY(calc(-50% - 40px));
      z-index: 2;
    `
        : `
      color: #707070;
      transform: translateY(calc(-50% + 0.5px));
    `}
    transition: 0.25s ease-in-out;
    left: 0;
    top: 50%;
    font-size: 11px;
    letter-spacing: 2px;
    font-weight: bold;
    position: absolute;
    text-transform: uppercase;
    padding: 5px 10px;
    box-sizing: border-box;
  }
`;

// AddInput:

export const AddInputWrapper = styled.div`
  grid-area: ${props => props.gridArea};
  display: grid;
  grid-template-columns: 1fr auto;
  cursor: text;
  transition: box-shadow 0.25s ease-in-out;
  box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.065);
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 15px 0;
  border-radius: 5px;
  position: relative;
`;

export const AddButton = styled.div`
  box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.065);
  cursor: pointer;
  display: flex;
  padding: 0 10px;
  align-items: center;
  border-radius: 0px 5px 5px 0;
  background: white;
`;
