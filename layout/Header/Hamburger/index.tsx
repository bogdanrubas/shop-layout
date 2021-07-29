import React from 'react';
import { HamburgerWrapper, Line } from './styles';

interface HamburgerProps {
  openMobileMenu: any;
  toggleMobileMenu: any;
}

const Hamburger: React.FunctionComponent<HamburgerProps> = ({openMobileMenu, toggleMobileMenu}) => {
  return (
    <HamburgerWrapper openMobileMenu={openMobileMenu} onClick={toggleMobileMenu}>
      <Line />
      <Line />
      <Line />
    </HamburgerWrapper>
  );
};

export default Hamburger;