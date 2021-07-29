import React from 'react';
import PropTypes from 'prop-types';
import { Title, PaginationWrapper, Circle } from './styles';

const Pagination = props => {
  const {
    // state:
    shouldShow,
    signUpActualForm,
    // data:
    signUpInfoData,
  } = props;

  const circles = signUpInfoData.map((circle, index) => (
    <Circle key={index} active={index + 1 === signUpActualForm}>
      {index + 1}
    </Circle>
  ));

  return (
    <>
      <Title>{signUpInfoData[signUpActualForm - 1].title}</Title>
      <PaginationWrapper toggleAnimation={shouldShow}>
        {circles}
      </PaginationWrapper>
    </>
  );
};

Pagination.propTypes = {
  // bool odpowiadajacy za to czy "Pagination" ma sie pokazac (animacja)
  shouldShow: PropTypes.bool.isRequired,
  // aktualny etap rejestracji
  signUpActualForm: PropTypes.number.isRequired,
  // tablica potrzebna do wyrenderowanie "circles"
  signUpInfoData: PropTypes.array.isRequired,
};

export default Pagination;
