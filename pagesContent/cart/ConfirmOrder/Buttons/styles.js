import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  & {
    position: absolute;
    bottom: 40px;
    left: 40px;
    right: 40px;
  }

  div {
    &:first-of-type {
      ${({ confirmOrderStep }) => confirmOrderStep === 0 ? `
        transform: translateX(-200px)
      ` : `
        &:hover {
          &::before {
            opacity: 1;
          }

          & {
            transform: scaleX(1.02) scaleY(1.05);
          }
        }

        & {
          transform: translateX(0px) scaleX(1) scaleY(1)
        }
      `}
    }

    &:last-of-type {
      ${theme.media.smallDesktopUp} {
        ${theme.appear({
          name: "fade",
          delay: 50,
          value: {
            x: 0,
            y: -20
          }
        })};
      }
      ${({ confirmOrderStep, confirmOrderMaxStep }) => confirmOrderStep === confirmOrderMaxStep ? `
        transform: translateX(200px)
      ` : `
        &:hover {
          &::before {
            opacity: 1;
          }

          & {
            transform: scaleX(1.02) scaleY(1.05);
          }
        }

        & {
          transform: translateX(0px) scaleX(1) scaleY(1)
        }
      `}
    }
  }
`;

export const Button = styled.div`
  &::before {
    transition: .35s ${theme.cubicBezier};
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: .7;
    ${({ back, theme }) => back ? `
      box-shadow: 0px 5px 50px -8px #666
    ` : `
      box-shadow: 0px 5px 50px -8px ${theme.primaryMain};
    `}
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    & {
      transform: scaleX(1.02) scaleY(1.05);
    }
  }

  & {
    transition: .35s ${theme.cubicBezier};;
    cursor: pointer;
    color: white;
    padding: 10px 15px;
    text-align: center;
    position: relative;
    border-radius: 4px;
    user-select: none;
		box-sizing: border-box;
    ${({ back }) => back ? `
      background: linear-gradient(to right bottom, #666, #333);
      float: left;
    ` : `
      background: linear-gradient(to right bottom, black, #666);
      float: right;
    `}
    @media (min-width: 500px) {
      width: 100px;
    }
    @media (max-width: 499px) {
      width: 60px;
    }
  }
`;
