import styled from 'styled-components';
import posed from 'react-pose';
import { theme } from '../../../../../config/theme';

export const ButtonsWrapper = styled.div`
  & {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  div {
    width: 100px;
  }
`;

export const ButtonAnimation = posed.div({
  left: {
    transform: 'translateX(-150px)',
    transition: {
      ease: theme.cubicBezierPose,
      duration: 250,
    },
  },
  show: {
    transform: 'translateX(0px)',
    transition: {
      ease: theme.cubicBezierPose,
      duration: 250,
    },
  },
});
