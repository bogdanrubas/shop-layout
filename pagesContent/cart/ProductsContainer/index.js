import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import {
  Wrapper,
  Title,
  Products,
  ProductAnimation,
  Footer,
  Back,
  Sum,
} from './styles';
import ArrowLeft from '../../../assets/icons/ArrowLeft';
import { theme } from '../../../config/theme';

export default class ProductsContainer extends Component {
  static propTypes = {
    cartData: PropTypes.array.isRequired,
    cartProductsValue: PropTypes.number.isRequired,
    productQuantityPlus: PropTypes.func.isRequired,
    productQuantityMinus: PropTypes.func.isRequired,
    toggleRemoveProduct: PropTypes.func.isRequired,
    productDeleteTimeout: PropTypes.number.isRequired,
  };

  render() {
    const {
      cartData,
      cartProductsValue,
      productQuantityPlus,
      productQuantityMinus,
      toggleRemoveProduct,
      productDeleteTimeout,
    } = this.props;

    return (
      <Wrapper>
        <Title>Koszyk</Title>

        <Products>
          {cartData.map((product, i) => (
            <ProductAnimation
              pose={
                // eslint-disable-next-line no-nested-ternary
                product.delete
                  ? 'delete'
                  : product.shouldDelete
                  ? 'shouldDelete'
                  : 'default'
              }
              key={i}
            >
              <Product
                index={i}
                productDeleteTimeout={productDeleteTimeout}
                toggleRemoveProduct={toggleRemoveProduct}
                productQuantityPlus={productQuantityPlus}
                productQuantityMinus={productQuantityMinus}
                product={product}
              />
            </ProductAnimation>
          ))}
        </Products>

        <Footer>
          <Back>
            <ArrowLeft
              styles={{
                size: 20,
                color: theme.colors.text.normal,
                strokeWidth: 70,
              }}
            />

            <span>Powrót do zakupów</span>
          </Back>

          <Sum>
            Suma: <b>{cartProductsValue} zł</b>
          </Sum>
        </Footer>
      </Wrapper>
    );
  }
}
