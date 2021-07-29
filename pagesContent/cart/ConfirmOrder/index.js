import React from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';
import Containers from './Containers';
import Buttons from './Buttons';
import { Wrapper } from './styles';

const ConfirmOrder = props => {
  const {
    confirmOrderData,
    confirmOrderStep,
    confirmOrderMaxStep,
    setPaymentMethod,
    paymentMethod,
    setStep,
  } = props;

  return (
    <Wrapper>
      <Pagination
        setStep={setStep}
        confirmOrderStep={confirmOrderStep}
        confirmOrderData={confirmOrderData}
      />

      <Containers
        confirmOrderData={confirmOrderData}
        confirmOrderStep={confirmOrderStep}
        setPaymentMethod={setPaymentMethod}
        paymentMethod={paymentMethod}
      />

      <Buttons
        confirmOrderStep={confirmOrderStep}
        confirmOrderMaxStep={confirmOrderMaxStep}
        setStep={setStep}
      />
    </Wrapper>
  );
};

ConfirmOrder.propTypes = {
  confirmOrderData: PropTypes.array,
  confirmOrderStep: PropTypes.number,
  confirmOrderMaxStep: PropTypes.number,
  setPaymentMethod: PropTypes.func,
  paymentMethod: PropTypes.number,
  setStep: PropTypes.func,
};

export default ConfirmOrder;
