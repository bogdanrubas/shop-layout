import React from 'react';
import PropTypes from 'prop-types';
import Plus from '../../../../assets/icons/Plus';
import Minus from '../../../../assets/icons/Minus';
import Close from '../../../../assets/icons/Close';

import {
  Wrapper,
  Image,
  Info,
  Quantity,
  Button,
  Input,
  Price,
  Delete,
} from './styles';
import { theme } from '../../../../config/theme';

const Product = props => {
  const {
    index,
    productQuantityPlus,
    productQuantityMinus,
    toggleRemoveProduct,
    productDeleteTimeout,
    product,
    style,
  } = props;

  return (
    <Wrapper index={index} style={style} product={product}>
      <Image>
        <img src={product.imgUrl} alt={product.imgUrl} />
      </Image>

      <Info>
        <b>{product.name}</b>
        <small>{product.brand}</small>
      </Info>

      <Quantity>
        <Button onClick={() => productQuantityMinus(index)}>
          <Minus
            styles={{
              size: 12,
              color: theme.colors.text.accent,
              strokeWidth: 110,
            }}
          />
        </Button>

        <Input value={product.quantity} type="text" />

        <Button onClick={e => productQuantityPlus(index)}>
          <Plus
            styles={{
              size: 12,
              color: theme.colors.text.accent,
              strokeWidth: 110,
            }}
          />
        </Button>
      </Quantity>

      <Price>
        {product.price} <span>zł</span>
      </Price>

      <Delete
        // dla animacji usuwania:
        productDeleteTimeout={productDeleteTimeout}
        shouldDelete={product.shouldDelete}
        delete={product.delete}
        onClick={e => toggleRemoveProduct(index)}
      >
        <Close
          styles={{
            size: 12,
            color: theme.colors.text.accent,
            strokeWidth: 110,
          }}
        />
        <span>Dodaj z powrotem</span>
      </Delete>
    </Wrapper>
  );
};

Product.propTypes = {
  index: PropTypes.number.isRequired,
  productQuantityPlus: PropTypes.func.isRequired,
  productQuantityMinus: PropTypes.func.isRequired,
  toggleRemoveProduct: PropTypes.func.isRequired,
  productDeleteTimeout: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default Product;
