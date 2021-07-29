import styled from 'styled-components';
import { theme } from 'config/theme';

export const Line = styled.span`
  transition: 0.3s;
  height: 1px;
  background-color: black;
  width: 25px;
`;

interface HamburgerWrapperProps {
  openMobileMenu: boolean;
}

export const HamburgerWrapper = styled.div<HamburgerWrapperProps>`
  & {
    transition: ${({ openMobileMenu }) =>
      openMobileMenu ? '.3s ease-in-out .3s' : '.3s'};
    grid-area: hamburger;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    transform: ${({ openMobileMenu }) =>
      openMobileMenu ? 'rotate(45deg)' : 'rotate(0deg)'};
    ${theme.media.smallDesktopUp} {
      display: none;
    }
    ${theme.media.tabletPortraitUp} {
      height: 25px;
      margin: 0 10px 0 20px;
    }
    ${theme.media.phone} {
      height: 25px;
      margin: 0 0 0 20px;
    }
  }

  span:nth-child(1),
  span:nth-child(3) {
    transition: ${({ openMobileMenu }) =>
      openMobileMenu ? '.3s ease-in-out .3s' : '.3s'};
  }

  span:nth-child(1) {
    transform: ${({ openMobileMenu }) =>
      openMobileMenu ? 'translateY(9px)' : 'translateY(0px)'};
  }

  span:nth-child(2) {
    width: ${({ openMobileMenu }) => (openMobileMenu ? '0px' : '25px')};
  }

  span:nth-child(3) {
    transform: ${({ openMobileMenu }) =>
      openMobileMenu
        ? 'translateY(-7px) rotate(90deg)'
        : 'translateY(0px) rotate(0deg)'};
  }
`;
