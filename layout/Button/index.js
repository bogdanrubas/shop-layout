import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './styles';

const Button = props => {
  const { value, type, onClick, gridArea } = props;

  return (
    <ButtonWrapper gridArea={gridArea} type={type} onClick={e => onClick(e)}>
      {value}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  // zawartość button'a:
  value: PropTypes.string.isRequired,
  // gray ?
  type: PropTypes.string,
  // funkcja po kliknieciu:
  onClick: PropTypes.func,
  // gridArea jesli rodzic ma display: grid
  gridArea: PropTypes.string,
};

export default Button;
