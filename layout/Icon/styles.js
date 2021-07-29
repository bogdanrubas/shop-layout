import styled from 'styled-components';

export const IconWrapper = styled.div`
  svg {
    & {
      ${({ size }) => `
        width: ${size}px;
        height: ${size}px;
      `}
      display: flex;
      align-items: center;
      justify-content: center;
    }

    path {
      ${({ strokeWidth, color }) => `
        stroke-width: ${strokeWidth};
        stroke: ${color};
      `}
      fill: none;
    }
  }
`;
