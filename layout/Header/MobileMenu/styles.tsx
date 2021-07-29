import styled from 'styled-components';
import posed from 'react-pose';
import { theme } from '../../../config/theme';

const WrapperAnimation = posed.div({
  visible: {
    height: "100vh",
    transition: {
      duration: 400,
      ease: theme.cubicBezierPose
    }
  },
  hidden: {
    height: "0vh",
    transition: {
      duration: 400,
      ease: theme.cubicBezierPose
    }
  }
});

export const Wrapper = styled(WrapperAnimation)`
  & {
    overflow: auto;
    box-sizing: border-box;
    ${theme.media.smallDesktopUp} {
      display: none
    }
  }

  ul {
    & {
      margin: 0;
      padding: 0;
      width: 100%;
    }

    ul {
      overflow: hidden;
    }
  }
`;

export const Category = styled.span`
  & {
    display: block;
    font-weight: bold;
    padding: 10px 20px;
    text-transform: uppercase;
    position: relative;
  }

  svg {
    & {
      transition: .35s ease-in-out;
      width: 15px;
      position: absolute;
      top: 12px;
      right: 20px;
    }

    path {
      stroke: black;
      stroke-width: 40;
    }
  }
`;

export const Subcategory = styled.span`
  & {
    display: block;
    padding: 5px 20px 5px 30px;
    text-transform: uppercase;
    position: relative;
  }

  svg {
    & {
      transition: .35s ease-in-out;
      width: 15px;
      position: absolute;
      top: 7px;
      right: 20px;
    }

    path {
      stroke: black;
      stroke-width: 40;
    }
  }
`;

interface ListAnimationProps {
  delay: number;
}

const ListAnimation = posed.li({
  hidden: {
    transform: "translateY(20px)",
    opacity: 0,
    // @ts-ignore
    transition: ({ delay }) => ({
      duration: 400,
      delay: delay,
      ease: theme.cubicBezierPose
    })
  },
  visible: {
    transform: "translateY(0px)",
    opacity: 1,
    // @ts-ignore
    transition: ({ delay }) => ({
      duration: 400,
      delay: delay,
      ease: theme.cubicBezierPose
    })
  }
});

export const List = styled(ListAnimation)<ListAnimationProps>`
  & {
    width: 100%;
    list-style: none;
  }

  a {
    display: block;
    padding: 5px 0 5px 40px;
    text-decoration: none;
    color: ${theme.colors.text.normal};
  }
`;

const DropdownAnimation = posed.ul({
  hidden: {
    height: 0,
    transition: {
      duration: 400,
      ease: theme.cubicBezierPose
    }
  },
  visible: {
    height: 'auto',
    transition: {
      duration: 400,
      ease: theme.cubicBezierPose
    }
  }
});

export const Dropdown = styled(DropdownAnimation)`
  margin: 0;
  padding: 0;
  overflow: hidden;
`;