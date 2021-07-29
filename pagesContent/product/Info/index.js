import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'layout/Dropdown';
import Button from 'layout/Button';

import {
  Wrapper,
  Name,
  Brand,
  Price,
  DropdownAnimation,
  ButtonContainer,
} from './styles';

const Info = props => {
  const {
    product,
    toggleSizesDropdown,
    toggleDescriptionDropdown,
    sizesDropdown,
    descriptionDropdown,
    chooseDropdownElement,
  } = props;

  return (
    <Wrapper>
      <Name>{product.name}</Name>
      <Brand>{product.brand}</Brand>
      <Price>{product.price}</Price>

      <DropdownAnimation>
        <Dropdown
          data={sizesDropdown}
          chooseDropdownElement={chooseDropdownElement}
          toggleDropdown={toggleSizesDropdown}
        />

        <Dropdown
          data={descriptionDropdown}
          toggleDropdown={toggleDescriptionDropdown}
        />
      </DropdownAnimation>

      <ButtonContainer>
        <Button gridArea="button" value="Dodaj do koszyka" />
      </ButtonContainer>
    </Wrapper>
  );
};

Info.propTypes = {
  product: PropTypes.object.isRequired,
  toggleSizesDropdown: PropTypes.func.isRequired,
  toggleDescriptionDropdown: PropTypes.func.isRequired,
  sizesDropdown: PropTypes.object.isRequired,
  descriptionDropdown: PropTypes.object.isRequired,
  chooseDropdownElement: PropTypes.func.isRequired,
};

export default Info;
