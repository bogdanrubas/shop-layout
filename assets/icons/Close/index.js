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

const Close = (props) => (
  <Wrapper styles={props.styles}>
    <svg viewBox="0 0 1000 1000">
      <path d="M74.5,74.5L926,926 M926,74.5L564.7,435.7 M435.5,565L74.2,926.2"/>
    </svg>
  </Wrapper>
);

export default Close;
