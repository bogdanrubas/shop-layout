import styled from 'styled-components';
import { theme } from '../../../../config/theme';

export const Wrapper = styled.div`
  &:last-of-type {
    border: none;
  }

  & {
    ${({ index }) =>
      theme.appear({
        name: 'fade',
        delay: 250 + index * 120,
        value: {
          x: 0,
          y: 40,
        },
      })};
    position: relative;
    display: grid;
    align-items: center;
    box-sizing: border-box;
    ${props =>
      props.product.shouldDelete
        ? `
      border-bottom: none;
    `
        : `
      border-bottom: 1px solid #efefef;
    `};
    @media (min-width: 1500px) {
      grid-template-columns: 120px 2fr 1fr 150px auto;
      grid-template-areas: 'image info quantity price delete';
      grid-gap: 60px;
    }
    @media (min-width: ${theme.breakpoints.tabletLandscape +
        1}px) and (max-width: 1499px) {
      grid-template-columns: 120px 2fr auto auto auto;
      grid-template-areas: 'image info quantity price delete';
      grid-gap: 60px;
    }
    @media (min-width: 950px) and (max-width: ${theme.breakpoints
        .tabletLandscape}px) {
      grid-template-columns: 120px 2fr 1fr 1fr auto;
      grid-template-areas: 'image info quantity price delete';
      grid-gap: 60px;
    }
    @media (min-width: ${theme.breakpoints
        .tabletPortrait}px) and (max-width: 949px) {
      grid-template-columns: 120px 1fr auto auto auto;
      grid-template-areas: 'image info quantity price delete';
      grid-gap: 40px;
    }
    @media (min-width: 580px) and (max-width: ${theme.breakpoints
        .tabletPortrait}px) {
      grid-template-columns: 120px 1fr auto auto;
      grid-gap: 0 40px;
      grid-template-areas:
        'image info price delete'
        'image quantity price delete';
    }
    @media (max-width: 579px) {
      grid-template-columns: 120px 1fr auto;
      grid-gap: 10px 20px;
      grid-template-areas:
        'image info delete'
        'image quantity .'
        'image price .';
    }
  }
`;

export const Image = styled.div`
  & {
    grid-area: image;
    box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, 0.11);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 120px;
    height: 120px;
  }

  img {
    width: 100%;
  }
`;

export const Info = styled.div`
  & {
    grid-area: info;
  }

  b {
  }

  small {
    display: block;
    margin: 2px 0 0 0;
    color: '#707070'
  }
`;

export const Quantity = styled.div`
  grid-area: quantity;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.div`
  &:hover {
    svg {
      & {
        transform: scale(1.2);
      }
    }
  }

  & {
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    transition: 0.35s;
  }
`;

export const Input = styled.input`
  &:focus {
    outline: none;
  }

  & {
    width: 50px;
    margin: 0 5px;
    text-align: center;
    font-size: ${theme.font.small};
    color: ${theme.colors.lightNormalTextColor};
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid #ebebeb;
    background: #f8f8f8;
  }
`;

export const Price = styled.div`
  & {
    grid-area: price;
    font-weight: bold;
    text-align: center;
    @media (max-width: 579px) {
      text-align: left;
    }
  }

  span {
    margin: 0 0 0 2px;
  }
`;

export const Delete = styled.div`
  &::before {
    transition: 0.35s;
    content: '';
    display: block;
    position: absolute;
    top: 35px;
    width: 170px;
    height: 2px;
    background: #dadada;
    ${props =>
      props.shouldDelete
        ? `
      opacity: 1;
      pointer-events: all;
    `
        : `
      opacity: 0;
      pointer-events: none;
    `};
  }

  &::after {
    ${props =>
      props.shouldDelete
        ? `
      transition: width ${props.productDeleteTimeout -
        350}ms linear .35s, opacity .35s;
      width: 170px;
      opacity: 1;
      pointer-events: all;
    `
        : `
      transition: .35s;
      width: 0px;
      opacity: 0;
      pointer-events: none;
    `};
    content: '';
    display: block;
    position: absolute;
    top: 35px;
    height: 2px;
    background: black;
  }

  & {
    transition: 0.15s;
    ${props =>
      props.delete
        ? `
      opacity: 0;
      pointer-events: none;
    `
        : `

    `}
    padding: 10px;
    grid-area: delete;
    cursor: pointer;
    position: relative;
    transition: 0.35s;
    @media (min-width: 580px) {
      ${props =>
        props.shouldDelete
          ? `
        transform: translateX(35px)
      `
          : `
        transform: translateX(0px)
      `}
    }
    @media (max-width: 579px) {
      position: absolute;
      top: -3px;
      right: 0px;
      ${props =>
        props.shouldDelete
          ? `
        transform: translateY(35px) translateX(27px)
      `
          : `
        transform: translateY(0px) translateX(0px)
      `}
    }
  }

  svg {
    transition: 0.35s;
    transform-origin: center;
    ${props =>
      props.shouldDelete
        ? `
      transform: rotate(45deg);
    `
        : `
      transform: rotate(0deg);
    `}
  }

  span {
    transition: 0.35s;
    display: block;
    white-space: nowrap;
    padding: 6px;
    left: 15px;
    top: 0;
    position: absolute;
    ${props =>
      props.shouldDelete
        ? `
      transform: translateX(15px);
      opacity: 1;
      pointer-events: all;
    `
        : `
      opacity: 0;
      pointer-events: none;
    `}
  }
`;
