import React from 'react';
import styled from 'styled-components';

interface WrapperProps {
  styles: any;
}

const Wrapper = styled.div<WrapperProps>`
  svg {
    & {
      width: ${props => props.styles.size}px;
      height: ${props => props.styles.size}px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    path {
      fill: none;
      stroke-width: ${props => props.styles.strokeWidth};
      stroke: ${props => props.styles.color};
    }
  }
`;

const Cart = (props: any) => (
  <Wrapper styles={props.styles}>
    <svg viewBox="0 0 1000 1000">
      <path d="M311.2,185.4h617.7c0,0,54.4,5,29.6,55.4c-24.7,50.4-138.4,297.2-138.4,297.2s-14.8,40.3-54.4,40.3 s-439.8,0-439.8,0 M34.5,130H158c0,0,39.5,0,54.4,45.3c14.8,45.3,123.5,448.4,123.5,448.4s14.8,40.3,49.4,40.3s380.5,0,380.5,0 M400.2,895.8c49.1,0,88.9-40.6,88.9-90.7s-39.8-90.7-88.9-90.7s-88.9,40.6-88.9,90.7S351,895.8,400.2,895.8z M751,895.8 c49.1,0,88.9-40.6,88.9-90.7s-39.8-90.7-88.9-90.7s-88.9,40.6-88.9,90.7S701.9,895.8,751,895.8z"></path>
    </svg>
  </Wrapper>
);

export default Cart;
