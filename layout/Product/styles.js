import styled from 'styled-components';
import { ImageWrapper } from './ProductImage/styles';
import { MoreColors, MoreColorsWrapper } from './ProductInfo/styles';
import { theme } from 'config/theme';

export const ProductWrapper = styled.div`
  &:hover {
    & {

    }

    ${ImageWrapper} {
      transform: scale(1.025) translateY(-5px);
      box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, .15);
    }

    ${MoreColors} {
      & {
        pointer-events: all;
        opacity: 1;
        transform: translateY(15px);
      }

      ${MoreColorsWrapper} {
        & {

        }

        img {
          opacity: 1;
        }
      }
    }
  }

  & {
    position: relative;
    ${theme.media.phone} {
      width: 220px;
      margin: 0 40px 0 0;
      display: inline-block;
    }
  }
`;
