import styled from 'styled-components';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  ${theme.media.phone} {
    position: relative;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  ${theme.media.tabletLandscapeUp} {
    margin: 10px 0 0 60px;
  }
  ${theme.media.tabletPortrait} {
    margin: 10px 0 0 40px;
  }
  ${theme.media.phone} {
    margin: 10px 0 0 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  margin: 35px 60px 60px 60px;
  grid-template-columns: 200px 1fr 200px;
  grid-gap: 40px;
`;

export const Thumbnails = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 200px);
  grid-gap: 40px;
`;

export const ThumbnailBackground = styled.div`
  &::before {
    ${props => props.active ? `

    ` : `
      background: rgba(0, 0, 0, .3);
    `};
    transition: .5s ${theme.cubicBezier};;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  & {
    ${props => props.active ? `
      transform: scale(1.3);
    ` : `

    `};
    transition: transform .5s ${theme.cubicBezier};;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background: url('${props => props.background}') no-repeat center;
    background-size: cover;
  }
`;

export const ThumbnailTitle = styled.p`
  font-size: 20px;
  text-align: center;

`;

export const ThumbnailDescription = styled.p`
  text-align: center;
  font-size: 20px;
  margin: 40px auto 0 auto;
  @media (min-width: 1401px) {
    width: 50%;
  }
  @media (min-width: 1000px) and (max-width: 1400px) {
    width: 75%;
  }
`;

export const Button = styled.div`
  &:hover {
    background: white;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0);
    color: black;
  }

  & {
    transition: .5s ${theme.cubicBezier};;
    width: 150px;
    margin: 40px auto 0 auto;
    text-align: center;
    border: 1px solid white;
    padding: 15px 0;
    border-radius: 5px;
    color: white;
  }

`;

export const Thumbnail = styled.div`
  &:hover {
    & {
      transform: ${props => props.active ? "" : "scale(1.05)"};
    }

    ${ThumbnailBackground} {
      ${props => props.active ? `

      ` : `
        &::before {
          background: rgba(0, 0, 0, 0);
        }

        & {
          transform: scale(1.3);
        }
      `};
    }
  }

  & {
    ${props => props.active ? `
      transform: scale(1.05)
    ` : `

    `};
    transition: .5s ${theme.cubicBezier};;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, .1);
    padding: 20px;
    box-sizing: border-box;
    border-radius: 8px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, .75);
    cursor: ${props => props.active ? "default" : "pointer"};
  }
`;

export const BigImage = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, .75);
  color: white;
`;

export const BigImageContent = styled.div`
  & {
    position: absolute;
    left: 60px;
    right: 60px;
  }

  ${ThumbnailTitle} {
    font-size: 40px;
  }
`;

export const Scroll = styled.div`
  overflow: auto;
  white-space: nowrap;
  ${theme.media.tabletLandscapeUp} {
    padding: 30px 60px;
  }
  ${theme.media.tabletPortrait} {
    padding: 30px 40px;
  }
  ${theme.media.phone} {
    padding: 30px 20px;
  }
`;

export const CardContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  bottom: 0;
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  width: calc(100% - 40px);
  margin: 0 auto 10px auto;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  width: calc(100% - 40px);
  margin: 0 auto 0 auto;
`;

export const Card = styled.div`
  &:last-of-type {
    margin: 0;
  }

  & {
    box-sizing: border-box;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, .75);
    color: white;
    width: 220px;
    border-radius: 8px;
    position: relative;
    text-align: center;
    height: 400px;
    margin: 0 40px 0 0;
    overflow: hidden;
    display: inline-block;
    white-space: normal;
  }
`;
