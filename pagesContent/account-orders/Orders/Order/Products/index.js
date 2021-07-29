/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Product, Image, Name, Quantity, Price } from './styles';

const Products = props => {
  const {
    // data:
    products,
    // state:
    moreInfo,
  } = props;

  return (
    <Wrapper>
      {products.map((product, i) => (
        <Product moreInfo={moreInfo} index={i} key={i}>
          <Image>
            <img src={product.imgUrl} alt={product.imgUrl} />
          </Image>

          <Name>
            <b>{product.name}</b>
            <span>{product.brand}</span>
          </Name>

          <Price>{product.price} zł</Price>

          <Quantity>
            {product.quantity === 1
              ? '1 sztuka'
              : product.quantity > 1 && product.quantity < 5
              ? `${product.quantity} sztuki`
              : `${product.quantity} sztuk`}
          </Quantity>
        </Product>
      ))}
    </Wrapper>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  moreInfo: PropTypes.bool.isRequired,
};

export default Products;
