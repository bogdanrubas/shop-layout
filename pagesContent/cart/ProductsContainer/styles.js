import styled from 'styled-components';
import posed from 'react-pose';
import { theme } from '../../../config/theme';

export const Wrapper = styled.div``;

export const Title = styled.h1`
  ${theme.media.smallDesktopUp} {
    ${theme.appear({
        name: 'fade',
        delay: 50,
        value: {
          x: 0,
          y: -20,
        },
      })};
  }
  ${theme.media.tabletLandscapeDown} {
    ${theme.appear({
        name: 'fade',
        delay: 50,
        value: {
          x: 0,
          y: 20,
        },
      })};
  }
  font-size: ${theme.font.big};
  letter-spacing: 1px;
  margin: 0;
  ${theme.media.tabletLandscapeUp} {
    padding: 0 60px;
  }
  ${theme.media.tabletPortrait} {
    padding: 0 40px;
  }
  ${theme.media.phone} {
    padding: 0 20px;
  }
`;

export const Products = styled.div`
  & {
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    ${theme.media.smallDesktopUp} {
      margin: 15px 0 0 0;
      padding: 30px 60px 0 60px;
      height: calc(100vh - 290px);
    }
    ${theme.media.tabletLandscape} {
      margin: 15px 0 0 0;
      padding: 0 40px 10px 40px;
    }
    ${theme.media.tabletPortrait} {
      margin: 15px 0 0 0;
      padding: 0 40px 10px 40px;
    }
    ${theme.media.phone} {
      margin: 20px 0 0 0;
      padding: 0 20px 10px 20px;
    }
  }
`;

export const ProductAnimation = posed.div({
  default: {
    transform: 'translateX(0%)',
    height: '191px',
    opacity: 1,
    pointerEvents: 'all',
    transition: {
      ease: theme.cubicBezierPose,
      duration: 680,
    },
  },
  shouldDelete: {
    transform: 'translateX(-100%)',
    transition: {
      ease: theme.cubicBezierPose,
      duration: 680,
    },
  },
  delete: {
    transform: 'translateX(-150%)',
    height: '0px',
    opacity: 0,
    pointerEvents: 'none',
    transition: {
      ease: theme.cubicBezierPose,
      duration: 680,
    },
  },
});

export const Footer = styled.div`
  & {
    ${theme.appear({
        name: 'fade',
        delay: 150,
        value: {
          x: 0,
          y: 20,
        },
      })};
    padding: 20px 0 0 60px;
    ${theme.media.tabletPortraitUp} {
      grid-template-columns: auto 1fr;
      display: grid;
    }
  }
`;
export const Back = styled.div`
  &:hover {
    svg {
      & {
        transition: 0.35s;
        transform: translateX(-3px);
      }

      path {
        stroke: ${theme.colors.brandColor1};
      }
    }

    span {
      color: ${theme.colors.brandColor1};
    }
  }

  & {
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: row;
    ${theme.media.phone} {
      display: none;
    }
  }

  svg {
    & {
      transition: 0.35s;
    }

    path {
      transition: 0.35s;
    }
  }

  span {
    transition: 0.35s;
    margin: 0 0 0 10px;
    font-weight: 1000;
    color: ${theme.colors.accentColor};
  }
`;

export const Sum = styled.div`
  & {
    color: ${theme.colors.normalColor};
    text-align: right;
    ${theme.media.tabletLandscapeUp} {
      padding: 0 60px 0 0;
    }
    ${theme.media.tabletPortrait} {
      padding: 0 40px 0 0;
    }
    ${theme.media.phone} {
      padding: 0 20px 0 0;
    }
  }

  b {
    margin: 0 0 0 5px;
    font-size: ${theme.font.big};
    color: ${theme.colors.accentColor};
  }
`;
