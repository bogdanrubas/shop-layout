import styled from 'styled-components';
import { theme } from 'config/theme';

export const Title = styled.div`
  font-size: 11px;
  color: ${theme.colors.lightNormalTextColor};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  margin: 5px 0 0 0;
`;

export const PaginationWrapper = styled.div`
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -10px;
    top: 0;
    z-index: 1;
    background: white;
  }
  & {
    ${({  toggleAnimation }) =>
      theme.animation({
        name: 'fade',
        toggle: toggleAnimation,
        delay: toggleAnimation ? 620 : 0,
        value: {
          x: 0,
          y: '20px',
        },
      })};
    padding: 15px 0 0 0;
    position: relative;
    display: flex;
    background: white;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Circle = styled.div`
  &::before {
    transition: 0.35s ${theme.cubicBezier};
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: -1;
    ${({  active }) =>
      active
        ? `
      border: 1px solid ${theme.colors.brandColor1};
      transform: scale(.85);
    `
        : `
      border: 1px solid transparent;
      transform: scale(0);
    `}
  }

  & {
    cursor: default;
    transition: 0.35s ${theme.cubicBezier};
    width: 20px;
    height: 20px;
    display: flex;
    position: relative;
    z-index: 3;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    ${({  active }) =>
      active
        ? `
      color: ${theme.colors.brandColor1};
      transform: scale(1.25);
    `
        : `

    `}
  }
`;
