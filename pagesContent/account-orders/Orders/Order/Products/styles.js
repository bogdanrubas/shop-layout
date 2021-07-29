import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  padding: 10px 20px 20px 20px;
`;

export const Product = styled.div`
  &:last-of-type {
    margin: 0;
  }

  & {
    margin: 0 0 20px 0;
    padding: 0 0 12px 0;
    ${({ index, moreInfo }) => moreInfo ? `
      opacity: 1;
      transform: translateY(0px);
      transition: .65s ${theme.cubicBezier} ${index * .105 + .15}s;
    ` : `
      opacity: 0;
      transform: translateY(30px);
      transition: .65s ${theme.cubicBezier};
    `}
    ${theme.media.tabletPortraitUp} {
      display: grid;
      grid-template-columns: auto 1fr auto 80px;
      align-items: center;
      grid-gap: 20px;
    }
  }
`;

export const Image = styled.div`
  & {
    border-radius: 8px;
    width: 80px;
    height: 80px;
    box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, .15);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    ${theme.media.phone} {
      position: absolute;
    }
  }

  img {
    width: 100%;
  }
`;

export const Name = styled.div`
  & {
    ${theme.media.phone} {
      margin: 0 0 0 90px;
    }
  }

  b {

  }

  span {
    display: block;
    font-size: ${theme.font.small};
  }
`;

export const Quantity = styled.div`
  color: #707070;
  ${theme.media.tabletPortraitUp} {
    text-align: center;
  }
  ${theme.media.phone} {
    display: inline-block;
    margin: 0 0 0 10px;
    font-size: 12px;
  }
`;

export const Price = styled.div`
  ${theme.media.phone} {
    margin: 10px 0 0 90px;
    display: inline-block;
  }
`;