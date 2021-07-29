import React, { Component } from 'react';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Links from './Links';
import Icons from './Icons';
import MobileMenu from './MobileMenu';
import { Wrapper, Container } from './styles';
import menuData from '../../data/menu.json';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      openMobileMenu: false,
    };
  }

  componentWillMount = () => {
    // tworzenie pomocniczych dla animacji
    menuData.forEach(category => {
      category.mobileDropdownOpened = false;

      category.subCategories.forEach(subCategory => {
        subCategory.mobileDropdownOpened = false;
      });
    });
  };

  toggleMobileMenu = () => {
    const { openMobileMenu } = this.state;

    this.setState({ openMobileMenu: !openMobileMenu });
  };

  render() {
    const { openMobileMenu } = this.state;

    return (
      <Wrapper>
        <Container>
          <Hamburger
            openMobileMenu={openMobileMenu}
            toggleMobileMenu={this.toggleMobileMenu}
          />

          <Logo />

          <Links menuData={menuData} />

          <Icons />
        </Container>

        <MobileMenu
          toggleMobileMenu={this.toggleMobileMenu}
          openMobileMenu={openMobileMenu}
          menuData={menuData}
        />
      </Wrapper>
    );
  }
}

export default Header;
