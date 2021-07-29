import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  & {
    display: grid;
    grid-gap: 20px;
    padding: 20px 20px 15px 20px;
    cursor: pointer;
    align-items: center;
    grid-template-columns: 1fr auto auto;
  }

  svg {
    transition: 0.45s ${theme.cubicBezier};
    ${({ moreInfo }) =>
      moreInfo
        ? `
      transform: rotate(180deg)
    `
        : `
      transform: rotate(0deg)
    `}
  }
`;

export const Date = styled.div`
  color: #707070;
`;

export const Value = styled.div``;
