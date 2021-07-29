import React from 'react';
import PropTypes from 'prop-types';
import { IconWrapper } from './styles';

import Close from './icons/close';
import Plus from './icons/plus';
import Minus from './icons/minus';
import Chevron from './icons/chevron';
import User from './icons/user';
import Cart from './icons/cart';

const Icon = props => {
  const { name, size, strokeWidth, color, onClick } = props;

  function renderIcon(iconName) {
    switch (iconName) {
      case 'close':
        return <Close />;

      case 'plus':
        return <Plus />;

      case 'minus':
        return <Minus />;

      case 'chevron':
        return <Chevron />;

      case 'user':
        return <User />;

      case 'cart':
        return <Cart />;

      default:
        break;
    }
  }

  return (
    <IconWrapper
      name={name}
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      onClick={onClick}
    >
      {renderIcon(name)}
    </IconWrapper>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Icon;
