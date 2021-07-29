import styled from 'styled-components';

export const Wrapper = styled.div`
  transition: 0.55s ease-in-out;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: 0px 0px 40px -5px rgba(0, 0, 0, 0.1);
  transform: ${props =>
    props.shouldFlip ? 'rotateY(360deg)' : 'rotateY(180deg)'};
  pointer-events: ${props => (props.shouldFlip ? 'all' : 'none')};
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  background: white;
  border-radius: 10px;
  overflow: hidden;
`;
