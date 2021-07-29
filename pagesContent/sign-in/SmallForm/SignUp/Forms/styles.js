import styled from 'styled-components';
import posed from 'react-pose';
import { theme } from '../../../../../config/theme';

export const FormsWrapper = styled.div`

`;

export const FormAnimation = posed.div({
  left: {
    transform: "translateX(-400px)",
    transition: {
      ease: theme.cubicBezierPose,
      duration: 450
    },
  },
  actual: {
    transform: "translateX(0px)",
    transition: {
      ease: theme.cubicBezierPose,
      duration: 450
    },
  },
  right: {
    transform: "translateX(400px)",
    transition: {
      ease: theme.cubicBezierPose,
      duration: 450
    },
  }
});


export const Form = styled(FormAnimation)`
  margin-top: -30px;
  overflow-y: auto;
  height: calc(100vh - 300px);
  width: 100%;
  box-sizing: border-box;
  padding: 50px 20px 0 20px;
  position: absolute;
`;