import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 280px;
  box-sizing: border-box;
  pointer-events: ${props => (props.shouldShow ? 'all' : 'none')};
`;
