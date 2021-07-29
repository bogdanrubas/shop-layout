import styled from 'styled-components';

export const ImageWrapper = styled.div`
  transition: .25s ease-in-out;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 290px;
  background-color: #f6f6f6;
`;

export const Image = styled.div`
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 120px -20px rgba(0,0,0,0.56);
  }

  & {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  img {
    width: 100%;
    position: absolute;
    transition: .5s ${({ theme }) => theme.cubicBezier};
  }
`;

export const Pagination = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 18px 1fr 18px;
  position: absolute;
  bottom: 0;
  z-index: 2;
  padding: 8px;
`;

export const Arrow = styled.div`
  & {
    cursor: pointer;
  }

  svg {
    & {
      width: 100%;
    }

    path {
      stroke: rgba(255, 255, 255, 1);
      stroke-width: 60;
    }
  }
`;

export const Nav = styled.div`
  & {
    transform: translateY(-2px);
    text-align: center;
  }

  span {
    &.active {
      transform: scale(1.35);
      background-color: rgba(255, 255, 255, .55);
    }

    & {
      transition: .35s;
      cursor: pointer;
      display: inline-block;
      width: 6px;
      height: 6px;
      margin: 0 2px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, .1);
      border: 1px solid rgba(255, 255, 255, 1);
    }
  }
`;