import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  position: relative;
  ${theme.media.smallDesktopUp} {
    grid-area: info;
  }
  ${theme.media.tabletLandscapeUp} {
    padding: 40px 60px 0 60px;
  }
  ${theme.media.tabletPortraitDown} {
    padding: 0px 20px;
  }
`;

export const Name = styled.h1`
  ${theme.appear({
    name: 'fade',
    delay: 300,
    value: {
      x: 0,
      y: 20
    }
  })};
  margin: 0;
  font-size: ${theme.font.big};
  ${theme.media.tabletPortrait} {
    padding: 40px 20px 0 20px;
  }
  ${theme.media.phone} {
    padding: 20px 0 0 0;
  }
`;

export const Brand = styled.p`
  ${theme.appear({
    name: 'fade',
    delay: 350,
    value: {
      x: 0,
      y: 20
    }
  })};
  margin: 0;
  text-transform: uppercase;
  font-size: ${theme.font.small};
  ${theme.media.tabletPortraitDown} {
    padding: 3px 0 0 0;
  }
`;

export const Price = styled.p`
  ${theme.appear({
    name: 'fade',
    delay: 400,
    value: {
      x: 0,
      y: 20
    }
  })};
  font-weight: bold;
  margin: 10px 0 20px 0;
  font-size: ${theme.font.big};
  ${theme.media.tabletPortraitDown} {
    padding: 20px 0 0 0;
  }
`;

export const DropdownAnimation = styled.div`
  ${theme.appear({
    name: 'fade',
    delay: 450,
    value: {
      x: 0,
      y: 20
    }
  })};
`;

export const ButtonContainer = styled.div`
  ${theme.media.smallDesktopUp} {
    ${theme.appear({
      name: 'fade',
      delay: 600,
      value: {
        x: 0,
        y: 20
      }
    })};
  }
  @media (min-width: 550px) {
    display: grid;
    margin: 40px 0 0 0;
    grid-template-areas: ". button";
    grid-template-columns: 1fr 170px;
  }
  ${theme.media.phone} {
    padding: 0 0 20px 0;
  }
`;
