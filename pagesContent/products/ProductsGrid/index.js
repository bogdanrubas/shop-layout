import React from 'react';
import PropTypes from 'prop-types';
import Product from 'layout/Product';
import { Wrapper, ProductAnimation } from './styles';

const ProductsGrid = props => {
  const { products } = props;

  return (
    <Wrapper>
      {products.map((product, i) => (
        <ProductAnimation key={i} index={i}>
          <Product
            name={product.name}
            brand={product.brand}
            price={product.price}
            productColors={product.productColors}
          />
        </ProductAnimation>
      ))}
    </Wrapper>
  );
};

ProductsGrid.propTypes = {
  // tablica z produktami:
  products: PropTypes.array.isRequired,
};

export default ProductsGrid;
