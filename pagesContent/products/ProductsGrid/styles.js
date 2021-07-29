import styled from 'styled-components';
import { theme } from 'config/theme';

export const ProductAnimation = styled.div`
  ${({ index }) =>
    theme.appear({
      name: 'fade',
      delay: 500 + 50 * index,
      value: {
        x: 0,
        y: 20,
      },
    })};
  ${theme.media.phone} {
    &:last-of-type {
      margin: 0;
    }

    & {
      display: inline-block;
      margin-right: 20px;
    }
  }
`;

export const Wrapper = styled.div`
  & {
    ${theme.media.smallDesktopUp} {
      margin: 170px 0 0 0;
      padding: 40px 40px 40px 340px;
    }
    ${theme.media.tabletLandscape} {
      padding: 40px;
      margin: 240px 0 0 0;
    }
    ${theme.media.tabletPortrait} {
      padding: 40px;
      margin: 240px 0 0 0;
    }
    ${theme.media.phone} {
      padding: 20px;
      margin: 180px 0 0 0;
      box-sizing: border-box;
      white-space: nowrap;
      overflow: auto;
      height: 480px;
    }
    /* grid: */
    @media (min-width: 2801px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 40px;
    }
    @media (min-width: 2401px) and (max-width: 2800px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 40px;
    }
    @media (min-width: 2001px) and (max-width: 2400px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 40px;
    }
    @media (min-width: 1751px) and (max-width: 2000px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 40px;
    }
    @media (min-width: 1501px) and (max-width: 1750px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 40px;
    }
    @media (min-width:
        ${theme.breakpoints.tabletLandscape + 1}px) and (max-width: 1500px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 40px;
    }
    @media (min-width: 1201px) and (max-width: ${theme.breakpoints.tabletLandscape}px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 40px 60px;
    }
    @media (min-width: 1001px) and (max-width: 1200px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 40px;
    }
    @media (min-width: 901px) and (max-width: 1000px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 40px 80px;
    }
    @media (min-width: 851px) and (max-width: 900px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 40px 60px;
    }
    @media (min-width: 701px) and (max-width: 850px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 40px;
    }
    @media (min-width: 651px) and (max-width: 700px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px 80px;
    }
    @media (min-width: 601px) and (max-width: 650px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px 60px;
    }
    @media (min-width: 481px) and (max-width: 600px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
    }
  }

  div:last-of-type {
    margin: 0;
  }
`;
