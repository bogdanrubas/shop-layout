import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Input from 'layout/Input';
import {
  Wrapper,
  Scroll,
  Container,
  Title,
  Description,
  PaymentMethods,
  Method,
  Grid,
} from './styles';

const Containers = props => {
  const {
    confirmOrderData,
    confirmOrderStep,
    paymentMethod,
    setPaymentMethod,
  } = props;

  function renderPaymentMethod() {
    switch (paymentMethod) {
      case 0:
        return (
          <Fragment>
            {confirmOrderData[2].inputs.map((input, i) => (
              <Input
                key={i}
                gridArea={input.gridArea}
                type={input.type}
                placeholder={input.placeholder}
                label={input.label}
              />
            ))}
          </Fragment>
        );

      case 1:
        return (
          <Fragment>
            Po sprawdzeniu zamówienia nastąpi przekierowanie do serwisu PayPal.
          </Fragment>
        );

      case 2:
        return (
          <Fragment>
            Z usługi płatności przy odbiorze można korzystać bez dodatkowych
            opłat. Należy przygotować wyliczoną kwotę, kurier nie wydaje reszty.
          </Fragment>
        );

      default:
        return '';
    }
  }

  return (
    <Wrapper>
      {confirmOrderData.map((container, i) => (
        <Scroll
          key={i}
          pose={
            // eslint-disable-next-line no-nested-ternary
            confirmOrderStep === i
              ? 'actual'
              : confirmOrderStep > i
              ? 'previous'
              : 'next'
          }
        >
          <Container>
            <Title>{container.title}</Title>

            <Description>{container.description}</Description>

            {container.title === 'Płatność' ? (
              <Fragment>
                <PaymentMethods paymentMethod={paymentMethod}>
                  <Method
                    chosen={paymentMethod === 0}
                    onClick={e => setPaymentMethod(0)}
                  >
                    <svg />

                    <p>Karta kredytowa</p>
                  </Method>

                  <Method
                    chosen={paymentMethod === 1}
                    onClick={() => setPaymentMethod(1)}
                  >
                    <svg />

                    <p>Płatność przy odbiorze</p>
                  </Method>

                  <Method
                    chosen={paymentMethod === 2}
                    onClick={() => setPaymentMethod(2)}
                  >
                    <svg />

                    <p>Paypal</p>
                  </Method>
                </PaymentMethods>

                {renderPaymentMethod()}
              </Fragment>
            ) : (
              ''
            )}

            {container.inputs !== undefined &&
            container.title !== 'Płatność' ? (
              <Grid gridAreaTemplates={container.gridAreaTemplates}>
                {container.inputs.map((input, j) => (
                  <Input
                    key={j}
                    gridArea={input.gridArea}
                    type={input.type}
                    placeholder={input.placeholder}
                    label={input.label}
                  />
                ))}
              </Grid>
            ) : (
              ''
            )}
          </Container>
        </Scroll>
      ))}
    </Wrapper>
  );
};

Containers.propTypes = {
  confirmOrderData: PropTypes.array.isRequired,
  confirmOrderStep: PropTypes.number.isRequired,
  paymentMethod: PropTypes.number.isRequired,
  setPaymentMethod: PropTypes.func.isRequired,
};

export default Containers;
