import React from 'react';
import ProductsContainer from './ProductsContainer';
import ConfirmOrder from './ConfirmOrder';
import cartData from '../../data/cart.json';
import { Wrapper } from './styles';

export default class PageCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      cartProductsValue: 0,
      productDeleteTimeout: 3000,
      confirmOrderStep: 0,
      confirmOrderMaxStep: undefined,
      paymentMethod: undefined,
      confirmOrderData: [
        {
          title: 'Dane',
          description:
            'Podaj swoje dane, abyśmy mogli wysłać Tobie twoje zakupy.',
          inputs: [
            {
              gridArea: 'name',
              type: 'text',
              placeholder: '',
              label: 'Imię',
            },
            {
              gridArea: 'surname',
              type: 'text',
              placeholder: '',
              label: 'Nazwisko',
            },
            {
              gridArea: 'e-mail',
              type: 'text',
              placeholder: '',
              label: 'E-mail',
            },
            {
              gridArea: 'phone-number',
              type: 'text',
              placeholder: '',
              label: 'Numer telefonu',
            },
          ],
          gridAreaTemplates: [
            {
              gridAreaTemplates:
                "'name name' 'surname surname' 'e-mail e-mail' 'phone-number phone-number'",
            },
            {
              gridAreaTemplates: "'name' 'surname' 'e-mail' 'phone-number'",
            },
          ],
        },
        {
          title: 'Dostawa',
          description: 'Podaj adres, pod który mają trafić twoje zakupy.',
          inputs: [
            {
              gridArea: 'town',
              type: 'text',
              placeholder: '',
              label: 'Miasto',
            },
            {
              gridArea: 'zip-code',
              type: 'text',
              placeholder: '',
              label: 'Kod pocztowy',
            },
            {
              gridArea: 'street',
              type: 'text',
              placeholder: '',
              label: 'Ulica',
            },
            {
              gridArea: 'house-number',
              type: 'text',
              placeholder: '',
              label: 'Numer domu',
            },
            {
              gridArea: 'apartament-number',
              type: 'text',
              placeholder: '',
              label: 'Numer lokalu',
            },
          ],
          gridAreaTemplates: [
            {
              gridAreaTemplates:
                "'town town' 'street street' 'zip-code zip-code' 'house-number apartament-number'",
            },
            {
              gridAreaTemplates:
                "'town' 'zip-code' 'street' 'house-number' 'apartament-number'",
            },
          ],
        },
        {
          title: 'Płatność',
          description: 'Wybierz jak zamierzasz zapłacić za zakupy.',
          inputs: [
            {
              gridArea: 'card-hodler',
              type: 'text',
              placeholder: 'np. Jan Kowalski',
              label: 'Dane posiadacza',
            },
            {
              gridArea: 'card-number',
              type: 'text',
              placeholder: 'np. 0000 1111 2222 3333',
              label: 'Numer karty',
            },
            {
              gridArea: 'expiration-date',
              type: 'text',
              placeholder: 'np. 01/01',
              label: 'Data ważności',
            },
            {
              gridArea: 'ccv',
              type: 'text',
              placeholder: 'np. 123',
              label: 'Kod CCV',
            },
          ],
          gridAreaTemplates: [
            {
              gridAreaTemplates:
                "'card-hodler card-hodler' 'card-number card-number' 'expiration-date ccv'",
            },
            {
              gridAreaTemplates:
                "'card-hodler' 'card-number' 'expiration-date' 'ccv'",
            },
          ],
        },
        {
          title: 'Podsumowanie',
          description: 'Dziękujemy za złożenie zamówienia!',
        },
      ],
    };
  }

  componentDidMount() {
    let sum = 0;

    cartData.forEach((product, i) => {
      sum += product.price * product.quantity;
      // tworzenie pomocnicznych dla animacji przy usuwaniu produktu z koszyka:
      product.shouldDelete = false;
      product.delete = false;
    });

    setTimeout(() => {
      console.log(cartData);
    }, 300);

    this.setState({
      cartData,
      cartProductsValue: sum,
      confirmOrderMaxStep: this.state.confirmOrderData.length - 1,
    });

    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => this.forceUpdate();

  // wybranie metody platniczej podczas potwierdzania zamowienia
  setPaymentMethod = i => {
    this.setState({
      paymentMethod: i,
    });
  };

  // ustawienie "kroku" podczas potwierdzania zamowienia
  setStep = i => {
    if (i === -1) {
    } else if (i === this.state.confirmOrderMaxStep + 1) {
    } else {
      this.setState({ confirmOrderStep: i });
    }
  };

  // zwiekszenie ilosci produktu
  productQuantityPlus = i => {
    const products = [...this.state.cartData];
    const product = { ...products[i] };
    product.quantity += 1;
    products[i] = product;

    this.setState({ cartData: products });

    setTimeout(() => {
      let sum = 0;

      this.state.cartData.forEach((product, i) => {
        if (product.delete !== true) {
          sum += product.price * product.quantity;
        }
      });

      this.setState({ cartProductsValue: sum });
    }, 100);
  };

  // zmniejszenie ilosci produktu
  productQuantityMinus = i => {
    const products = [...this.state.cartData];
    const product = { ...products[i] };
    product.quantity -= 1;
    products[i] = product;

    if (product.quantity >= 0) {
      this.setState({ cartData: products });
    }

    setTimeout(() => {
      let sum = 0;

      this.state.cartData.forEach((product, i) => {
        sum += product.price * product.quantity;
      });

      this.setState({ cartProductsValue: sum });
    }, 100);
  };

  // usuwanie produktu z koszyka
  toggleRemoveProduct = i => {
    const shouldDeleteProducts = [...this.state.cartData];
    const shouldDeleteProduct = { ...shouldDeleteProducts[i] };

    // zapytanie czy na pewno chce sie usunac
    shouldDeleteProduct.shouldDelete = !shouldDeleteProduct.shouldDelete;
    shouldDeleteProducts[i] = shouldDeleteProduct;

    this.setState({ cartData: shouldDeleteProducts });

    // usuniecie po uplywie "this.state.productDeleteTimeout" czasu
    let timeoutHandle = null;
    timeoutHandle = setTimeout(() => {
      const deleteProducts = [...this.state.cartData];
      const deleteProduct = { ...deleteProducts[i] };
      deleteProduct.delete = true;
      deleteProducts[i] = deleteProduct;

      setTimeout(() => {
        if (deleteProduct.shouldDelete === true) {
          this.setState({ cartData: deleteProducts });
        }

        // aktualizacja sumy w koszyku po usunięciu towaru:
        let sum = 0;

        this.state.cartData.forEach((product, i) => {
          if (product.delete !== true) {
            sum += product.price * product.quantity;
          }
        });

        this.setState({ cartProductsValue: sum });
      }, 10);

      // "wyczyszczenie" elementu, ktory sie usuwa
      // setTimeout(() => {
      //   let cartDataAfterDeleteProduct = [...this.state.cartData];
      //   cartDataAfterDeleteProduct.splice(i, 1);
      //
      //   this.setState({ cartData: cartDataAfterDeleteProduct });
      // }, 300);
    }, this.state.productDeleteTimeout);

    // sprawdzanie czy nie anulowalo usuwania
    setInterval(() => {
      if (this.state.cartData[i].shouldDelete === false) {
        clearTimeout(timeoutHandle);
      }
    }, 10);
  };

  render() {
    return (
      <Wrapper>
        <ProductsContainer
          cartData={this.state.cartData}
          cartProductsValue={this.state.cartProductsValue}
          productQuantityPlus={this.productQuantityPlus}
          productQuantityMinus={this.productQuantityMinus}
          toggleRemoveProduct={this.toggleRemoveProduct}
          productDeleteTimeout={this.state.productDeleteTimeout}
        />
        <ConfirmOrder
          confirmOrderData={this.state.confirmOrderData}
          confirmOrderStep={this.state.confirmOrderStep}
          paymentMethod={this.state.paymentMethod}
          setPaymentMethod={this.setPaymentMethod}
          confirmOrderMaxStep={this.state.confirmOrderMaxStep}
          setStep={this.setStep}
        />
      </Wrapper>
    );
  }
}