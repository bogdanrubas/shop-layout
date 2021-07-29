import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Icons from './Icons';
import Logo from './Logo';
import { Container, HeaderWrapper } from './styles';
import menuData from '../../data/menu.json';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  openMobileMenu: any;

}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <Hamburger
          openMobileMenu={openMobileMenu}
          toggleMobileMenu={() => {setOpenMobileMenu(!openMobileMenu)}}
        />

        <Logo />

        {/* <Links menuData={menuData} /> */}

        <Icons />
      </Container>

      <MobileMenu
        toggleMobileMenu={() => {setOpenMobileMenu(!openMobileMenu)}}
        openMobileMenu={openMobileMenu}
        data={menuData}
      />
    </HeaderWrapper>
  );
};

export default Header;