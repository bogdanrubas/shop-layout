import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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

const Minus = (props) => (
  <Wrapper styles={props.styles}>
    <svg viewBox="0 0 1000 1000">
      <path d="M55,500.5h891"/>
    </svg>
  </Wrapper>
);

export default Minus;
