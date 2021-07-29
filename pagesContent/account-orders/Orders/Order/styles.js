import styled from 'styled-components';
import { theme } from '../../../../config/theme';
import posed from 'react-pose';

export const WrapperAnimation = posed.div({
  more: {
    height: "auto",
    transition: {
      ease: theme.cubicBezierPose,
      duration: 650
    },
  },
  less: {
    height: 60,
    transition: {
      ease: theme.cubicBezierPose,
      duration: 500
    },
  }
});


export const Wrapper = styled(WrapperAnimation)`
  &:last-of-type {
    margin: 0;
  }

  & {
    background: white;
    border-radius: 8px;
    margin: 0 0 15px 0;
    overflow: hidden;
    box-shadow: 0px 5px 60px -10px rgba(0, 0, 0, .075);
  }
`;