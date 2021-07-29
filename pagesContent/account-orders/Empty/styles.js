import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.big};
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  ${({ theme }) => theme.media.tabletPortraitUp} {
    height: calc(100vh - 65px);
  }
  ${({ theme }) => theme.media.phone} {
    height: calc(100vh - 50px);
  }
`;
