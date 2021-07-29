import styled from 'styled-components';
import { ButtonWrapper } from '../../layout/Button/styles';
import { theme } from 'config/theme';

export const Wrapper = styled.div`
  & {
    ${theme.media.tabletLandscapeUp} {
      padding: 100px 60px 60px 60px;
    }

    ${theme.media.tabletPortrait} {
      padding: 80px 40px 40px 40px;
    }

    ${theme.media.phone} {
      padding: 50px 20px 20px 20px;
    }
  }

  ${ButtonWrapper} {
    ${theme.media.smallDesktopUp} {
      width: 200px;
      margin: 30px 0 0 0;
    }

    ${theme.media.tabletLandscape} {
      width: 200px;
      margin: 30px 0 0 0;
      float: right;
    }

    ${theme.media.tabletPortrait} {
      width: 200px;
      margin: 30px 0 0 0;
      float: right;
    }

    ${theme.media.phone} {
      margin: 10px 0 0 0;
    }
  }
`;

export const PageInfo = styled.div`
  & {
    border-bottom: 1px solid #eee;
    padding: 0 0 20px 0;
  }

  h1 {
    margin: 15px 0 0 0;
    font-size: ${theme.font.big};
  }

  small {
    color: #707070;
  }
`;