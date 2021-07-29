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

const ArrowLeft = (props) => (
  <Wrapper styles={props.styles}>
    <svg viewBox="0 0 1000 1000">
      <path d="M229.7,488.7 M414,162.1L71.6,504.5l873.4-0.2 M414,846.9L183.6,616.5"/>
    </svg>
  </Wrapper>
);

export default ArrowLeft;
