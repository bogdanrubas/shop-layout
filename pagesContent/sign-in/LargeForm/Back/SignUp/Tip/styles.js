import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px;
  position: relative;
  ${({ shouldShow }) => shouldShow ? `
    transition: .35s .65s;
    box-shadow: 0px 0px 40px -5px rgba(0, 0, 0, .1);
    opacity: 1;
  ` : `
    transition: .35s;
    box-shadow: none;
    opacity: 0;
  `}
`;
