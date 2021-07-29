import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Circle } from './styles';

const Pagination = props => {
  const { confirmOrderStep, confirmOrderData, setStep } = props;

  return (
    <Wrapper>
      {confirmOrderData.map((circle, i) => (
        <Circle
          key={i}
          active={confirmOrderStep === i}
          onClick={e => setStep(i)}
        >
          {i + 1}
        </Circle>
      ))}
    </Wrapper>
  );
};

Pagination.propTypes = {
  confirmOrderStep: PropTypes.number.isRequired,
  confirmOrderData: PropTypes.array.isRequired,
  setStep: PropTypes.func.isRequired,
};

export default Pagination;
